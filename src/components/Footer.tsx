const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-800 px-8 pt-20 pb-32 relative bg-black z-0">
        {/* Large CREEM Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none bg-transparent">
          <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 select-none">
            CREEM
          </p>
        </div>

        <div className="max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col justify-between items-start z-0">
          {/* Left Side - Logo and Copyright */}
          <div>
            <div className="mr-4 md:flex mb-4 z-0">
              <a className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20" href="/">
                <img 
                  alt="Creem Peach Icon" 
                  width="25" 
                  height="25" 
                  src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
                />
                <span className="font-medium text-white">Creem</span>
              </a>
            </div>
            <div className="relative z-10">Copyright © 2025 Armitage Labs OÜ</div>
            <div className="mt-2 relative z-10">All rights reserved</div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="grid grid-cols-4 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Pages</span>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/pricing">Pricing</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/contact">Contact</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/blog">Blog</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/careers">Careers</a>
            </div>

            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Legal</span>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/privacy">Privacy Policy</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/terms">Terms of Service</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/about">About Us</a>
            </div>

            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Socials</span>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="https://x.com/creem_io">Twitter</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="https://discord.gg/q3GKZs92Av">Discord</a>
            </div>

            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Integrations</span>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/negotiation">AI Negotiation</a>
              <a className="transition-colors text-muted-foreground hover:text-neutral-400 text-xs sm:text-sm" href="/affiliate">Affiliates</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;