import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import SignIn from '../containers/SignIn'
import UsarContexto from '../context/UsarContexto'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <UsarContexto>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Routes>
        </UsarContexto>
      </Layout>
    </BrowserRouter>
    </>
  )
}

