import React from 'react';
import Header from './components/header'
import api from './services/api'
import Main from './pages/main'
import "./styles.css"
import Routes from './routes.js'

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
)
export default App;
