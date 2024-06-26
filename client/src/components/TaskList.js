import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'//antes se llamda useHistory

export default function TaskList() {

  const [tasks, setTasks] = useState([])
  const navigate = useNavigate();

  const loadTasks = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
    setTasks(data)
  };

  const handleDelete = async (id) => { //eliminando del backend
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    })

    setTasks(tasks.filter(task => task.id !== id));//eliminando tareas del frontend
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <>
      <h1>Task List</h1>
      {
        tasks.map(task => (
          <Card style={{
            marginBottom: ".7rem",
            backgroundColor: '#1e272e'
          }}
            key={task.id}
          > {/*creamos una tarjeta por cada tarea */}
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div style={{ color: 'white' }}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>

              <div>
                <Button 
                  variant='contained' 
                  color='inherit' 
                  onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                  Edit
                </Button>
                <Button
                  variant='contained'
                  color='warning'
                  onClick={() => handleDelete(task.id)}
                  style={{ marginLeft: '.5rem' }}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
