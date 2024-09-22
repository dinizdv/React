import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './styles/app.css'

function App() {

  return (
    <div className='container'>
    <Header />
    <div className="container-content">
    <TaskForm btnText={'Register your task'} />
    <TaskList />
    </div>
    </div>
  )
}

export default App
