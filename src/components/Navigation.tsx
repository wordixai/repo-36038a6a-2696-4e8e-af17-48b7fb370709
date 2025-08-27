import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
          <div className="flex items-center gap-4">
            <a className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20" href="/">
              <img 
                alt="Creem Peach Icon" 
                width="25" 
                height="25" 
                src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
                className="w-6 h-6"
              />
              <span className="font-medium text-white">Creem</span>
            </a>
            <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <ul className="group flex-1 list-none justify-center space-x-1 flex items-center gap-1">
                <li>
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li>
                  <a className="nav-link" href="/pricing">Pricing</a>
                </li>
                <li>
                  <a className="nav-link" href="/blog">Blog</a>
                </li>
                <li>
                  <a className="nav-link" href="/docs">Docs</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-2 items-center">
            <a className="hero-button" href="/sign-in">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
          <a className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20" href="/">
            <img 
              alt="Creem Peach Icon" 
              width="25" 
              height="25" 
              src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
              className="w-6 h-6"
            />
            <span className="font-medium text-white">Creem</span>
          </a>
          <Menu className="text-white h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;