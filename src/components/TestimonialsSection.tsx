const TestimonialsSection = () => {
  return (
    <div className="relative z-20 pt-0 pb-40">
      <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight">
        Loved by Indie Hackers and VC Backed SaaS
      </h2>
      <p className="text-sm md:text-base my-4 text-muted-foreground font-normal text-center max-w-lg mx-auto">
        Creem is used by companies of every size. Here's what some of them have to say.
      </p>
      
      {/* Testimonials grid would go here */}
      <div className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonials would be mapped here */}
      </div>
    </div>
  );
};

export default TestimonialsSection;