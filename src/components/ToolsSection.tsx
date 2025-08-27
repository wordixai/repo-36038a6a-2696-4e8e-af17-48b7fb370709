import { DollarSign, Eye, Package, PlayCircle, Layers, Bitcoin, ShoppingCart, Heart } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    {
      icon: DollarSign,
      title: "Financial Workflows",
      description: "Automate your financial operations with customizable workflows. From revenue splits to payouts, everything runs on autopilot."
    },
    {
      icon: Eye,
      title: "Instant Setup", 
      description: "Get your financial infrastructure up and running in minutes. Built for teams that move fast."
    },
    {
      icon: Eye,
      title: "Global Operations",
      description: "Run your business globally from day one. Handle international payments, compliance, and currency conversions automatically."
    },
    {
      icon: PlayCircle,
      title: "Best-in-Class Support",
      description: "No more getting lost in the queue. Get paired with a dedicated support specialists who understands your account."
    },
    {
      icon: Layers,
      title: "Dynamic Price Engine",
      description: "Price testing on autopilot. Launch lean, be flexible, and run tests like increasing prices as you gain traction. *Coming Soon*"
    },
    {
      icon: Bitcoin,
      title: "Crypto Payments",
      description: "Enable your customers to purchase products with the most popular cryptocurrencies. *Coming Soon*"
    },
    {
      icon: ShoppingCart,
      title: "AI-Powered Insights",
      description: "Make data-driven decisions with AI-powered analytics. Understand your business metrics and spot opportunities instantly."
    },
    {
      icon: Heart,
      title: "Revenue Sharing",
      description: "Build partnership-driven growth with automated revenue sharing. Perfect for modern collaborative business models. *Coming Soon*"
    }
  ];

  return (
    <div className="relative z-20 py-40 md:py-40">
      <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight">
        Tools for the next generation of companies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col lg:border-r py-10 relative group lg:border-l lg:border-b dark:border-neutral-800">
            <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            
            <div className="mb-4 relative z-10 px-10">
              <tool.icon className="w-6 h-6 text-neutral-400" />
            </div>
            
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition duration-200"></div>
              <span className="group-hover:translate-x-2 transition duration-200 inline-block">
                {tool.title}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-xs mx-auto relative z-10 px-10">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;