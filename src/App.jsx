import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';



function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Auth/>}/>
    <Route path='/dash' element={<Dashboard/>}/>
    <Route path='/profile' element={<Profile/>}/>

    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
