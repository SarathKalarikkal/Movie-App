import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Components/Header/Header" 
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import MovieDetail from "./Components/MovieDetail/MovieDetail"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import "./App.scss"


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='container'>
           <Routes>
             <Route exact path='/' element={<Home/>} />
             <Route  path='/movies/:imdbID' element={<MovieDetail/>} />
             <Route  element={<PageNotFound/>} />
           </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;