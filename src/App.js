import React from 'react';
import Introduction from './components/Introduction/Introduction';
import Information from './components/Information/Information';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <div>
        <Introduction />
        <Information />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
