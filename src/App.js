import React from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './Component/Home'
import Video from './Component/Video'
import Upload from './Component/Upload'
import LoginIn from './Component/LoginIn'
import SignUp from './Component/SignUp'
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Videos' element={<Video/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/LoginIn' element={<LoginIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
