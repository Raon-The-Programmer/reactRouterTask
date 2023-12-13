import React from 'react';
import { Route, NavLink, Routes, BrowserRouter as Router } from 'react-router-dom';
import AllPosts from './AllPosts.jsx';
import FullStackPosts from './FullStackPosts';
import DataSciencePosts from './DataSciencePosts';
import CyberSecurityPosts from './CyberSecurityPosts';
import CareersPosts from './CareersPosts';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/" >All</NavLink></li>
            <li><NavLink to="/full-stack" >Full Stack Development</NavLink></li>
            <li><NavLink to="/data-science" >Data Science</NavLink></li>
            <li><NavLink to="/cyber-security" >Cyber Security</NavLink></li>
            <li><NavLink to="/careers" >Careers</NavLink></li>
          </ul>
        </nav>
        <div className='line'></div>
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='/full-stack' element={<FullStackPosts />} />
          <Route path='/data-science' element={<DataSciencePosts />} />
          <Route path='/cyber-security' element={<CyberSecurityPosts />} />
          <Route path='/careers' element={<CareersPosts />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
