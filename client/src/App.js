import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Container from '@mui/material/Container'
import Menu from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
    <Menu/> {/*para barra de navegacion*/}
      <Container>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/tasks/new' element={<TaskForm />} />
          {/* Edit Route */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
