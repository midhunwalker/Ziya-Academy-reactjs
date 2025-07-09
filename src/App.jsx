import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedCounterSection from './components/AnimatedCounterSection'



function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>

      <AnimatedCounterSection/>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <Testimonial />

      <section id="contact">
        <ContactForm />
      </section>
      
      
      <Footer />
    </div>
  );
}

export default App;