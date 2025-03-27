import HeroPage from '@/containers/heroSection';
import ShowCase from '@/containers/showcase';
import Footer from '@/components/footer';
import Testimonials from '@/containers/testimonialSection';
import ContactForm from '@/containers/contactSection';
import ProductVideoShowcase from '@/containers/productVideoShowcase';

function Home() {

  return (
    <div className="min-h-screen bg-white">
      <HeroPage />
      <ShowCase />
      <ProductVideoShowcase />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
