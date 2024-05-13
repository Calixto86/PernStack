import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/task/new' element={<TaskForm/>}/>
          {/* Edit Route */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
