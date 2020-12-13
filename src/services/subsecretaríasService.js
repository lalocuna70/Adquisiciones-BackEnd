const Subsecretaria = require("../models/Subsecretaria");

const getSubsecretarias = async () => {
    const subsecretarias = await Subsecretaria.find();
    return subsecretarias
};

module.exports = {
    getSubsecretarias
}