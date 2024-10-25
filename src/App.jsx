import './App.css'
import LeftSideBar from './components/LeftSideBar'
import Feed from './components/Feed'
import RightSideBar from './components/RightSideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='flex justify-between w-full gap-0'>
          <LeftSideBar />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <RightSideBar />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
