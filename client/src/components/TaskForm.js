import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography, styled } from '@mui/material';
import { useState, useEffect } from 'react'; //{capturar un estado, }
import { useNavigate } from 'react-router-dom';

export default function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        const res = await fetch("http://localhost:4000/tasks", {//envia una peticion get por defecto 
            method: 'POST',
            body: JSON.stringify(task), //convierte el objeto JSON en string
            headers: { 'content-type': 'application/json' },//le mandamos en la cabecera http el tipo de recurso
        })
        const data = await res.json()//respuesta de la peticion http

        setLoading(false)
        navigate('/') //lo redirecciona al inicio
    }

    const handleChange = e => {
        {/*actualiza los cambios del estado*/ }
        setTask({ ...task, [e.target.name]: e.target.value })
    };

    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>{/*para que el recuadro este centrado ver, hori*/}
            <Grid item xs={3}> {/*va ocupar 3 columnas por defecto es 12*/}
                <Card sx={{ mt: 5 }} style={{
                    backgroundColor: '#1e272e',
                    padding: '1rem'
                }}
                >{/*margi-top*/}
                    <Typography variant='5' textAlign='center' color='white'>Create Task</Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant='filled'
                                label='Write your title'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='title'
                                onChange={handleChange}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />{/*inputs en material ui son TextField y label tiene animacion*/}

                            <TextField
                                variant='filled'
                                label='Write your description'
                                multiline
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='description'
                                onChange={handleChange}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />

                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                disabled={!task.title || !task.description}
                            > {/*submit para q se ejecute el formulario es decir lo refresca*/}
                                {loading ? (<CircularProgress color='inherit' size={24}/>) : 'Create'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
