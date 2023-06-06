import './App.css';
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/services';
import Myportfolio from './components/myportfolio/Myportfolio'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer';
function App() {
    return ( <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Myportfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        
       

        </>
    );
}

export default App;