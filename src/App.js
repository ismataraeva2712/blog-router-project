import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Videos from './Component/Videos/Videos';
import NotAvailable from './Component/NotAvailable/NotAvailable';
import Login from './Component/Login/Login';
import BlogDetail from './Component/BlogDetail/BlogDetail';
import { createContext, useState } from 'react';
export const BlogContext = createContext()
function App() {
  const [blogs, setBlogs] = useState([])
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blogDetail/:id' element={<BlogDetail></BlogDetail>}></Route>
          <Route path='/videos' element={<Videos></Videos>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotAvailable></NotAvailable>}></Route>
        </Routes>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
