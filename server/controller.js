const houses = require(`./db.json`);

module.exports = {
    getHouses: (req,res) => {
        req.status(200).send(houses)
    },
    deleteHouse: (req, res) => {

    },
    createHouse: (req, res) => {

    },
    updateHouse: (req, res) => {

    }
}