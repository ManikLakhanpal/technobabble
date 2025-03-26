function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="flex flex-col justify-center items-center mx-auto text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
            alt="Yung lee"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-4">Yung lee</h4>
          <p className="relative text-center px-4 md:px-8 xl:px-16 py-8 md:py-12 xl:py-20 max-w-5xl mb-12 bg-[url('/quotes.svg')] bg-no-repeat bg-top-right">
            Product description will be here in one small paragraph. Product
            description will be here in one small paragraph. Product description
            Product description will be here in one small paragraph. Product
            description Product description will be here in one small paragraph.
            Product description will be here in one small paragraph. Product
            description Product description will be here in one small paragraph.
            Product description will be here in one small paragraph.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
