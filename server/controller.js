const e = require("express");
const houses = require(`./db.json`);
let newHouseId = 4;

module.exports = {
    getAllHouses: (req,res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const targetId = +req.params.id;

        const foundIndex = houses.findIndex(houseObj => {
            return houseObj.id === targetId
        });

        houses.splice(foundIndex, 1)

        res.status(200).send(houses);

    },
    createHouse: (req, res) => {
        console.log(req.body)

        req.body.id = newHouseId

        houses.push(req.body)

        newHouseId += 1;

        res.status(200).send(houses);

    },
    updateHouse: (req, res) => {
        const targetId = +req.params.id;
        const type = req.body.type;
        // const currentPrice = req.body.price;

        const foundIndex = houses.findIndex(houseObj => {
           return houseObj.id === targetId
        });

        if (type === `minus`) {
            houses[foundIndex].price -= 10000
        } else if (type === 'plus') {
            houses[foundIndex].price += 10000
        }

        res.status(200).send(houses)

    }
}