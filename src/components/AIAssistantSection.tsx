const AIAssistantSection = () => {
  const suggestedQuestions = [
    "What is my churn rate?",
    "To which country do I sell the most?",
    "What day of the week do I sell the best?",
    "What is my average order value?"
  ];

  return (
    <div className="dark mb-40 relative py-20 my-6">
      {/* Section Header */}
      <div className="mb-16 relative z-20">
        <h2 className="mb-5 max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight">
          AI Assistant
        </h2>
        <p className="text-center max-w-3xl mx-auto text-sm md:text-base my-4 text-muted-foreground font-normal">
          Leverage Creem AI to analyze your payment data and uncover valuable business insights. 
          From revenue trends to customer behavior patterns, our AI assistant helps you understand your business operations
        </p>
        <div className="flex items-center justify-center mt-2">
          <img 
            alt="OpenAI" 
            width="100" 
            height="20" 
            src="/icons/openailogo.svg"
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-10 w-screen left-1/2 -translate-x-2/4 flex justify-center items-center">
        <div className="absolute z-10 top-0 bg-gradient-to-b from-black to-transparent h-96 w-full"></div>
        <div className="h-[55rem] w-full bg-black bg-dot-white/[0.7] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        </div>
        <div className="absolute z-10 -bottom-6 bg-gradient-to-t from-black to-transparent h-48 w-full"></div>
      </div>

      {/* Chat Interface */}
      <div className="relative z-20">
        <div className="relative w-full sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[50rem] mx-auto">
          {/* Glow Effects */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-lg -z-10"></div>
          
          <div className="border bg-card shadow z-20 relative w-full text-white border-zinc-800 rounded-lg overflow-hidden">
            {/* Chat Header */}
            <div className="flex-col space-y-1.5 p-6 border-b bg-primary py-0 h-12 flex justify-center z-20 relative border-zinc-800">
              <h3 className="leading-none tracking-tight font-semibold flex items-center justify-between w-full px-4">
                <div className="flex items-center gap-2">
                  <img 
                    alt="Creem Peach Icon" 
                    width="18" 
                    height="18" 
                    src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
                    style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(46deg) brightness(107%) contrast(102%)' }}
                  />
                  <p className="text-black">Creem Assistant</p>
                </div>
              </h3>
            </div>

            {/* Chat Content */}
            <div className="relative">
              <div className="min-h-80 max-h-80 overflow-y-auto overflow-x-hidden p-4 bg-popover flex flex-col">
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="mb-6">
                    <img 
                      alt="Creem Peach Icon" 
                      width="25" 
                      height="25" 
                      src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4 max-w-52">
                    Hello, how can I help you today?
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center mt-2 max-w-md">
                    {suggestedQuestions.map((question, index) => (
                      <button 
                        key={index}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm py-2 text-xs bg-zinc-800 hover:bg-primary h-8 px-3 hover:text-black border-zinc-700 text-zinc-400"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-border bg-secondary/30 backdrop-blur">
              <form className="relative w-full">
                <input 
                  placeholder="Message..." 
                  className="w-full px-4 py-2 rounded-full bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  type="text" 
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ↵
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantSection;