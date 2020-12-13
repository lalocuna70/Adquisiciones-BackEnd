const Subsecretaria = require("../models/Subsecretaria");

const getSubsecretarias = async () => {
    const subsecretarias = await Subsecretaria.find();
    //console.log(subsecretarias);
    return subsecretarias
};

module.exports = {
    getSubsecretarias
}