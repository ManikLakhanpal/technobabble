

import HeroPage from '@/containers/heroSection';
import ShowCase from '@/containers/showcase';
import Footer from '@/components/footer';
import Testimonials from '@/containers/testimonialSection';
import ContactForm from '@/containers/contactSection';
import ProductVideoShowcase from '@/containers/productVideoShowcase';

function Home() {
  
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroPage />

      {/* Why Technoclass Section */}
      <ShowCase />

      <ProductVideoShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
