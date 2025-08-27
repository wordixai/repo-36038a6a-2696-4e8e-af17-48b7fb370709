import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Spotlight Animation */}
      <svg 
        className="animate-spotlight pointer-events-none absolute z-[1] h-[30%] w-[138%] lg:w-[154%] opacity-0" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 3787 2842" 
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse 
            cx="1924.71" 
            cy="273.501" 
            rx="1924.71" 
            ry="273.501" 
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" 
            fill="white" 
            fillOpacity="0.21"
          />
        </g>
        <defs>
          <filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"/>
          </filter>
        </defs>
      </svg>

      <div className="flex flex-col min-h-screen pt-20 relative overflow-hidden">
        {/* Product Hunt Banner */}
        <div className="relative z-40 w-full overflow-visible">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative mt-20 md:mt-24 block w-full bg-[#da552f] text-white shadow-md" 
            href="https://www.producthunt.com/posts/creem-2"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 sm:gap-x-4 px-4 py-0.5 sm:px-6 sm:py-1">
              <span className="text-sm font-medium sm:text-base justify-self-end text-right">
                We are live on Product Hunt
              </span>
              <img 
                alt="Product Hunt" 
                width="80" 
                height="80" 
                className="h-[80px] w-[80px] -my-7 sm:-my-8 drop-shadow-lg justify-self-center" 
                src="/producthuntlogo.png"
              />
              <span className="text-sm font-medium sm:text-base justify-self-start text-left">
                come check us out!
              </span>
            </div>
          </a>
        </div>

        {/* Hero Badge */}
        <div className="flex justify-center">
          <button className="bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-300 inline-block w-fit mx-auto">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10">
              <span>Save up to 50% on fees with our competitive pricing 🎉</span>
              <ArrowRight className="h-4 w-4" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 drop-shadow-2xl">
          <div className="flex flex-row">
            <div className="drop-shadow-glowWhite whitespace-pre">Financial </div>
            <div>OS for</div>
          </div>
          <div className="inline-block text-left text-neutral-900 dark:text-neutral-100 px-2 mt-6 relative z-10 drop-shadow-glowPrimary">
            <span className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 text-primary">
              SaaS Startups
            </span>
          </div>
        </h1>

        {/* Hero Description */}
        <p className="text-center mt-6 text-base md:text-xl text-foreground-dark max-w-3xl mx-auto relative z-10 pt-6">
          Empowering small teams to achieve big business outcomes.<br />
          A complete financial infrastructure for the next generation of efficient companies.<br />
          <br />
          <strong className="text-primary">Built for the future of work.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 justify-center mt-6 relative z-10">
          <a className="hero-button" href="/sign-in">
            Get started for free 🍦
          </a>
          <a className="relative z-10 bg-transparent border border-transparent text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center text-white hover:bg-neutral-800 hover:shadow-xl flex space-x-2 items-center group" href="/contact">
            <span>Contact us</span>
            <ArrowRight className="group-hover:translate-x-1 h-3 w-3 transition-transform duration-200" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="p-4 border bg-neutral-800 border-neutral-700 rounded-[32px] mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-black/80 to-black scale-[1.1] pointer-events-none"></div>
          <div className="p-2 bg-black border-neutral-700 border rounded-[24px]">
            <img 
              alt="Creem Dashboard" 
              width="1920" 
              height="1080" 
              className="rounded-[20px] w-full" 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center"
            />
          </div>
        </div>
      </div>

      {/* Product Hunt Badges */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <a href="https://www.producthunt.com/products/creem" target="_blank">
          <img 
            alt="Product Hunt Badge" 
            width="250" 
            height="54" 
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1005303&theme=dark&period=daily"
          />
        </a>
        <a href="https://www.producthunt.com/products/creem" target="_blank">
          <img 
            alt="Product Hunt Topic Badge" 
            width="250" 
            height="54" 
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=489575&theme=dark&period=monthly&topic_id=94"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;