const { Router } = require('express');
const { getDogsById } = require('../controllers/controllers');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs/:idRaza", (req, res) => {
    getDogsById(req, res)
})





module.exports = router;