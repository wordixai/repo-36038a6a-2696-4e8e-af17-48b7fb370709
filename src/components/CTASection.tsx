const CTASection = () => {
  return (
    <section className="py-60 w-full overflow-hidden relative z-30">
      <div className="bg-transparent">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-neutral-900 to-black sm:rounded-2xl">
          <div className="relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden px-6 md:px-8">
            <div className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"></div>
            
            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                Ready to build the future?
              </h2>
              <p className="mt-4 max-w-[26rem] text-center mx-auto text-base/6 text-neutral-200">
                Join the next generation of efficient teams.<br />
                Get started with Creem's Financial OS today.
              </p>
              
              <div className="relative z-10 mx-auto flex justify-center mt-6 px-3 space-x-3">
                <a className="hero-button" href="/sign-in">
                  Get started for free 🍦
                </a>
                <a className="hero-button" href="/pricing">
                  Compare Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;