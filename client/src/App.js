import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'

import { MainPage } from './pages/MainPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { RegisterPage } from './pages/RegisterPage.jsx'
import { PostsPage } from './pages/PostsPage.jsx'
import { PostPage } from './pages/PostPage.jsx'
import { MyAccount } from './pages/MyAccount.jsx'

import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/posts' element={<PostsPage />}></Route>
        <Route path='/posts/:id' element={<PostPage />}></Route>
        <Route path='/me' element={<MyAccount />}></Route>
      </Routes>

      <ToastContainer position='bottom-left' />
    </Layout>
  )
}

export default App
