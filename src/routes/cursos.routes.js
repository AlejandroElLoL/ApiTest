const { Router } = require('express');
const { getCursos, getCurso, createCursos, updateCursos, deleteCursos } = require('../controllers/cursos.controllers.js');

const router = Router();

router.get("/cursos", getCursos);
router.get("/cursos/:id", getCurso);
router.post("/cursos", createCursos);
router.patch("/cursos/:id", updateCursos);
router.delete("/cursos/:id", deleteCursos);

module.exports = router;
