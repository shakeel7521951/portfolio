import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import WebDevelopmentPage from './pages/webDevelopment/webDevelopment';
import DataScience from './pages/datascience/DataScience';
import WordPressPage from './pages/wordpress/Wordpress';
import ProjectDetail from './Components/projects/ProjectDetailPage';

function App() {
  return (
    <Router>
      <div className="App bgColor textColor">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path='/data-science' element={<DataScience />} />
          <Route path='/wordpress' element={<WordPressPage />} />
          <Route path='/projectDetail/:id' element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
