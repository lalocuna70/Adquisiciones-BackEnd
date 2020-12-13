const router = require("express").Router();
const passport = require("passport");
const partidaController = require("../controllers/partidaController");
const productoController = require("../controllers/productoController")
const subsecretariasController = require("../controllers/subsecretariasController");
const requisicionesController = require("../controllers/requisicionesController")
const accionesController = require("../controllers/accionesController")
const centroTrabajoController = require("../controllers/centroTrabajo")
const municipioLocalidadController = require("../controllers/municipioLocalidadController")
const proveedorController = require("../controllers/proveedorController")
const userController = require("../controllers/userController")
const unidadesController = require("../controllers/unidadesController")
const admonController = require("../controllers/admonController")
const fuentesController = require("../controllers/fuentesController")
const lotesRequisicionController = require("../controllers/lotesRequisicionController")
const anexosController = require("../controllers/anexosController")
const helpers = require("../helpers/auth")
const { v4: uuidv4 } = require('uuid');

const email = require("../email");
const oEmail = new email({
  //"host":"smtp.live.com", 
  //"port":"25", 
  //"secure":false,
  "service":"Gmail" ,
  "auth":{ 
        "type":"login", 
        "user":"adquisiciones@seduzac.gob.mx", 
        "pass":'adquisiciones.2020' 
   }
});

router.post('/emailVerify',  function(req, res, next){
    
    let email ={ 
      from:"adquisiciones@seduzac.gob.mx",  //remitente
      to: req.body.to,  //destinatario
      subject: req.body.subject,  //asunto del correo
      html: req.body.html
    };
    oEmail.enviarCorreo(email); 
    
})



const path = require("path");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      uuidv4() + path.extname (file.originalname).toLocaleLowerCase());
      /*
      file.originalname.replace(path.extname(file.originalname), "") +
      "-" +
      file.idlote +
      path.extname(file.originalname)
      
    );*/
  }
});

var upload = multer({ storage: storage });
//var download = multer({ })

router.post('/anexos', helpers.isLoggedIn, upload.single('anexo'), (req, res) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  return res.status(200).send(res.req.file);
});


router.get('/anexos/:id', helpers.isLoggedIn, (req,res) => {
  const file = req.params;
  res.sendFile(path.join(__dirname + "/../../uploads/" + file.id));
});

router.post('/signup', function (req, res, next) {
  passport.authenticate('local-signup', function (err, users, info) {
    if (err) { return res.status(500).send(); }
    if (!users) { return res.status(404).send(); }
    console.log("USER ROUTES", users)
    return res.status(200).send(users);
  })(req, res, next);
});

router.post('/signup-area', function (req, res, next) {
  passport.authenticate('local-signup-area', function (err, area, info) {
    if (err) { return res.status(500).send(); }
    if (!area) { return res.status(404).send(); }
    console.log("USER ROUTES", area)
    return res.status(200).send(area);
  })(req, res, next);
});


router.post('/signin', function (req, res, next) {
  passport.authenticate('local-signin', function (err, user, info) {
    if (err) { return res.status(500).send(); }
    if (!user) { 
        //return res.status(404).send(); 
        return res.redirect('/logout');
    }
    req.logIn(user, function(err) {
      console.log("LOGIN USER", user)
      return res.status(200).send(user);  
    })
    //console.log("LOGIN USER", user)
    //console.log(res.cookies);
    //return res.status(200).send(user);
  })(req, res, next);
});

router.route('/logout')
  .get((req, res) => {
    req.logout();
    req.session.save(err => {
      if (err) {
        return res.sendStatus(500);
      }

      return res.redirect('/');
    })
  });

router.get('/cuentaanexos/:id', helpers.isLoggedIn, anexosController.cuentaAnexosById, function (req, res, next) {
    console.log("Cuenta Anexos Id", res);
    res.status(200).send(res);
});
 
router.post('/nuevoAnexo', helpers.isLoggedIn, anexosController.insertaAnexo, function (req, res, next) {
    console.log("nuevo Anexo", req);
    res.status(200).send(res);
});  
router.get('/obteneranexos/:id', helpers.isLoggedIn, anexosController.getAnexosById, function (req, res, next) {
  console.log("Obtener Anexos Id", res);
  res.status(200).send(res);
});
router.post('/nuevoLote', helpers.isLoggedIn, lotesRequisicionController.insertaLote, function (req, res, next) {
    console.log("REQ nuevoLote ROUTES", req);
    res.status(200).send(res);
});

router.post('/updateLote', helpers.isLoggedIn, lotesRequisicionController.actualizaLote, function (req, res, next) {
  console.log("REQ actualizaLote ROUTES", req);
  res.status(200).send(res);
});

router.get('/lotes/:idRequisicion', helpers.isLoggedIn, lotesRequisicionController.getLotesByIdReq, function (req, res, next) {
  console.log("REQ loteByIdReq ROUTES", res);
  res.status(200).send(res);
});

router.post('/updateProducto', helpers.isLoggedIn, productoController.actualizaProducto, function (req, res, next) {
    console.log("REQ updateProducto ROUTES", req);
    res.status(200).send(res);
});

router.post('/updateRequisicion', helpers.isLoggedIn, requisicionesController.actualizaRequisicion, function (req, res, next) {
  console.log("REQ updateRequisicion ROUTES", req);
  res.status(200).send(res);
});

router.post('/nuevoProducto', helpers.isLoggedIn, productoController.insertaProducto, function (req, res, next) {
  console.log("REQ nuevoProducto ROUTES", req); 
  res.status(200).send(res);
});
router.post('/changePass',userController.setNewPass, function (req, res, next) {
    console.log("REQ changePass ROUTES", req);
    res.status(200).send(res);
});

router.get('/getUser/:email', userController.getEmail, function (req, res, next) {
  console.log("RES USER", res);
  res.status(200).send(res);
});

router.post('/activateUser', userController.setEstatus, function (req, res, next) {
  console.log("REQ activateUser ROUTES", req);
  res.status(200).send(res);
});

router.get('/partidas', helpers.isLoggedIn, partidaController.getPartidas, function (req, res, next) {
  res.status(200).send(res);
});
//helpers.isAuthenticated,

router.get('/productos', helpers.isLoggedIn, productoController.getProductos, function (req, res, next) {
  
  res.status(200).send(res);
});

router.get('/productos/:partida', productoController.getProductosByPartida, function (req, res, next) {
  console.log("RES PRODUCTOS ROUTES", res);
  res.status(200).send(res);
});

router.get('/administrativo/:rfc/:email', admonController.getAdmon, function (req, res, next) {
  console.log("RES ADMINISTRATIVO", res);
  res.status(200).send(res);
});

router.get('/subsecretarias', subsecretariasController.getSubsecretarias, function (req, res, next) {
  console.log("RES SUBSECRETARIAS ROUTES", res);
  res.status(200).send(res);
});

router.get('/unidades', unidadesController.getUnidades, function (req, res, next) {
  console.log("RES Unidades ROUTES", res);
  res.status(200).send(res);
});

router.post('/requisicionNueva', helpers.isLoggedIn, requisicionesController.insertaRequisicion, function (req, res, next) {
  console.log("REQ Requisicion nueva", req);
  res.status(200).send(res);
});

router.get('/requisiciones/:fuente', helpers.isLoggedIn, requisicionesController.getRequisiciones, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/requisicion_user/:elaborado', helpers.isLoggedIn, requisicionesController.getRequisicionesUser, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/requisicion_id/:id', helpers.isLoggedIn, requisicionesController.getRequisicionId, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/folios', helpers.isLoggedIn, requisicionesController.getFolios, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/acciones', helpers.isLoggedIn, accionesController.getAcciones, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/fuentes', helpers.isLoggedIn, fuentesController.getFuentes, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/accion-desc/:accion', helpers.isLoggedIn, accionesController.getAccionDesc, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/partida-desc/:partida', helpers.isLoggedIn, partidaController.getPartidaDesc, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/centros-trabajo', helpers.isLoggedIn, centroTrabajoController.getCentrosTrabajo, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/centro-trabajo/:cv_cct/:cv_mun/:cv_loc', centroTrabajoController.getCentroTrabajo, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/centro-trabajo/:cv_cct', helpers.isLoggedIn, centroTrabajoController.getCentroTrabajoCCT, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/proveedor/:cedula/:rfc', proveedorController.getProveedor, function (req, res, next) {
  res.status(200).send(res);
});

router.get('/municipio_localidad', municipioLocalidadController.getMunicipioLocalidad, function (req, res, next) {
  res.status(200).send(res);
});

router.route('/session-check')
  .get(
    (req, res) => {
      res.status(200).send(req.user);
    },
  );


module.exports = router;
