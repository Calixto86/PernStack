const pool = require('../db')

const getAllTasks = async (req, res) => {
    try {
        const alltasks = await pool.query('SELECT * FROM task')
        res.json(alltasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "task not found",
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *',
            [title, description,]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params

    const result = await pool.query('DELETE FROM task WHERE id = $1', [id]);

    if(result.rowCount === 0) 
        return res.status(404).json({
            message: "task not found",
    });

    return res.sendStatus(204); //codigo de hhtp 204: todo fue bien pero el server no responde nada
}

const updateTask = (req, res) => {
    res.send('eliminando una tareas');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}