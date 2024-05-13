import { Button, Card, CardContent, Grid, TextField, Typography, styled } from '@mui/material';
import { useState, useEffect } from 'react'; //{capturar un estado, }

export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const handleSubmit = e => {
        e.preventDefault();

        console.log(task);
    }

    const handleChange = e => { {/*actualiza los cambios del estado*/}
        setTask({...task, [e.target.name]: e.target.value})
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
                                inputProps={{style: {color: 'white'}}}
                                InputLabelProps={{style: {color: 'white'}}}
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
                                inputProps={{style: {color: 'white'}}}
                                InputLabelProps={{style: {color: 'white'}}}
                            />

                            <Button variant='contained' color='primary' type='submit'> {/*submit para q se ejecute el formulario es decir lo refresca*/}
                                Save
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
