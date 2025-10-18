
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx'
import About from './Routes/About.jsx';
import Layout from './Layout.jsx';
import FAQ from './Routes/FAQ.jsx';
import HowItWorks from './Routes/HowItWorks.jsx';
import Testimonials from './Routes/Testimonials.jsx';
import WhyUs from './Routes/WhyUs.jsx';
import Services from './Routes/Services.jsx';
import PrivacyPolicy from './Routes/PrivacyPolicy.jsx';
import TermsOfServices from './Routes/TermsOfServices.jsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-Works" element={<HowItWorks />} />
            <Route path='/services' element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/why-Us" element={<WhyUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-services" element={<TermsOfServices />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
