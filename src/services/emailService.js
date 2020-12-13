"use strict";

const Email = require("../email");

const enviarCorreo = async (email) => {
    const oEmail = new Email({
        "host":"smtp.gmail.com", 
        "port":"587", 
        "secure":false, 
        "auth":{ 
              "type":"login", 
              "user":"lalo.acuna@uaz.edu.mx", 
              "pass":"esal.080405" 
         }
    });
    oEmail.enviarCorreo(email);
    res.send("Ok");
}


module.exports = {
    enviarCorreo
};