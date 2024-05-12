const { Router } = require('express');
const pool = require('../db')

const router = Router();

router.get('/tasks', async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json(result.rows[0].now)
})

router.get('/tasks/10', (req, res) => {
    res.send('retornando una sola tarea');
})

router.post('/tasks', (req, res) => {
    res.send('creando una nueva tareas');
})

router.delete('/tasks', (req, res) => {
    res.send('eliminando una tareas');
})

router.put('/tasks', (req, res) => {
    res.send('actualizando una tareas');
})

module.exports = router;