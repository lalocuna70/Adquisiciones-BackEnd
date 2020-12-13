const nodemailer = require('nodemailer');

class Email{

    constructor(oConfig){
        this.useTransport = nodemailer.createTransport(oConfig);

    }

    enviarCorreo(oEmail){
        try {
            this.useTransport.sendMail(oEmail, function (error, info){
                if(error){
                    console.log("Error el enviar correo" + error)
                }else{
                    console.log("Correo enviado" + info.message)
                }
                this.useTransport.quit();

            })
        }catch(e){
            console.log("Email.enviarCorreo -- Error --" + e)
        }
    }
}

module.exports = Email;
