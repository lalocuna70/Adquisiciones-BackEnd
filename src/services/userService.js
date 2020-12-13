"use strict";

const User = require("../models/users");

const setNewPass = (id, password) => {
  const newPassword = password;
  //this.newPassword = this.encryptPassword(this.newPassword);
  const filter = { "_id": id };
  //const update = { "password" : newPassword };
  return User.findOne(filter)
  .then(user => {
    user.password = user.encryptPassword(newPassword);
    user.save();
    console.log("SERVICE USER UPDATE", user);
    console.log("Valores buscados", filter);
    //console.log("Valores actualizados", update);
    return user;
    })
  .catch(err => {
      console.log(err);
  });
};

const setEstatus = (id, estatus) => {
  const filter = { "_id": id };
  const update = { "estatus" : estatus };
  return User.findOneAndUpdate(filter, update, { new: true })
  .then(user => {

    console.log("SERVICE USER UPDATE", user);
    console.log("Valores buscados", filter);
    console.log("Valores actualizados", update);
    return user;
    })
  .catch(err => {
      console.log(err);
  });
};

const getEmail = (email) => {
  console.log(email);
  return User.findOne({email : email})
  .then(user => {
    console.log("SERVICE USER SEARCH", user);
    return user;
    })
  .catch(err => {
      console.log(err);
  });
};

module.exports = {
  getEmail,
  setEstatus,
  setNewPass
};
