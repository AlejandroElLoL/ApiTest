const { pool } = require('../db.js');

const getCursos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cursos');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal.",
        });
    }
};

const getCurso = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cursos WHERE id = ?', [req.params.id]);

        if (rows.length <= 0) return res.status(404).json({
            mensaje: 'Curso no encontrado',
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal.",
        });
    }
};

const createCursos = async (req, res) => {
    const { nombre, modalidad, extraModalidad, comienzo, diasCursada, extraDiasCursada } = req.body;
    try {
        if (
            nombre === undefined || 
            modalidad === undefined || 
            extraModalidad === undefined || 
            comienzo === undefined || 
            diasCursada === undefined || 
            extraDiasCursada === undefined
        ) {
            res.send("Faltan valores");
        } else {
            const [rows] = await pool.query(
                'INSERT INTO cursos (nombre, modalidad, extraModalidad, comienzo, diasCursada, extraDiasCursada) VALUES (?, ?, ?, ?, ?, ?)', 
                [nombre, modalidad, extraModalidad, comienzo, diasCursada, extraDiasCursada]
            );
            res.send({
                id: rows.insertId,
                nombre, 
                modalidad, 
                extraModalidad, 
                comienzo, 
                diasCursada, 
                extraDiasCursada,
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal.",
        });
    }
};

const updateCursos = async (req, res) => {
    const { id } = req.params;
    const { nombre, modalidad, extraModalidad, comienzo, diasCursada, extraDiasCursada } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE cursos SET nombre = IFNULL(?, nombre), modalidad = IFNULL(?, modalidad), extraModalidad = IFNULL(?, extraModalidad), comienzo = IFNULL(?, comienzo), diasCursada = IFNULL(?, diasCursada), extraDiasCursada = IFNULL(?, extraDiasCursada) WHERE id = ?', 
            [nombre, modalidad, extraModalidad, comienzo, diasCursada, extraDiasCursada, id]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            mensaje: 'Curso no encontrado',
        });

        const [rows] = await pool.query('SELECT * FROM cursos WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal.",
        });
    }
};

const deleteCursos = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM cursos WHERE id = ?', [req.params.id]);

        if (result.affectedRows <= 0) return res.status(404).json({
            mensaje: 'Curso no encontrado',
        });

        res.status(204).json({
            mensaje: "Curso eliminado",
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal.",
        });
    }
};

module.exports = {
    getCursos,
    getCurso,
    createCursos,
    updateCursos,
    deleteCursos,
};
