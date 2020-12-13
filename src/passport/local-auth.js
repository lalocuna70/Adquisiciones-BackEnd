const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models/users');
//const users = require('../models/users');
//const Area = require('../models/area')

passport.serializeUser((user, done) => {
  //console.log("Serializer : ", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findById(id);
  //console.log("DESERIALIZE",user);
  done(null, user);
  
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',

  passReqToCallback: true
}, async (req, email, password, done) => {

  const users = await Users.findOne({ 'email': email })
  const { cedula, cv_cct, nombreUser, typeUser, rfc, titular, cargo, subsec, estatus } = req.body

  if (users) {
    return done(null, false, req.flash('signupMessage', 'El correo ya ha sido usado.'));
  } else {

    const newUser = new Users();
    newUser.cedula = cedula;
    newUser.cv_cct = cv_cct;
    newUser.rfc = rfc;
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.nombreUser = nombreUser;
    newUser.typeUser = typeUser;
    newUser.titular = titular;
    newUser.cargo = cargo;
    newUser.subsec = subsec;
    newUser.estatus = estatus;

    console.log("NEW USER", newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await Users.findOne({ email: email, "estatus": 1  });
  if (!user) {
    return done(null, false, req.flash('signinMessage', 'Usuario no encontrado'));
  }
  if (!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Password Incorrecto'));
  }
  
  return done(null, user);
}, ));
