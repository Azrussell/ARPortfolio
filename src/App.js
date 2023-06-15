import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Section from './Section/Section';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




function App() {
  return (    
    <div className="App">
     {/* <Header />  */}
     <Section />
     <About /> 
     <Projects />
     <Footer />
     
    </div>
  );
}

export default App;
