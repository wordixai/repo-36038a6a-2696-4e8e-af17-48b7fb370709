import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const PaymentFlowSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Global tax compliance",
      description: "We're your merchant of record. That means we handle payments, merchant fees, fraud and sales tax without you lifting a finger."
    },
    {
      title: "Borderless SaaS payments",
      description: "Accept payments from anywhere in the world with local payment methods and automatic currency conversion."
    },
    {
      title: "Instant payment methods",
      description: "Support for all major payment methods including cards, digital wallets, and bank transfers."
    },
    {
      title: "Trials & discount codes",
      description: "Built-in support for free trials, promotional codes, and flexible pricing models."
    },
    {
      title: "A.I. fraud prevention",
      description: "Advanced machine learning algorithms protect your business from fraudulent transactions."
    },
    {
      title: "Failed payment recovery",
      description: "Intelligent retry logic and dunning management to recover failed payments automatically."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto text-white relative z-10">
      <div className="mb-16 text-center">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight mb-4">
          Smooth International Sales
        </h2>
        <p className="text-sm md:text-base max-w-4xl my-4 mx-auto text-center font-normal text-gray-300">
          Everything you need to handle payments for your SaaS business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Features List */}
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="transition hover:!text-primary duration-200 hover:bg-neutral-900/50 cursor-pointer border-gray-800 last:border-0 overflow-hidden rounded-sm">
                <button 
                  className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none"
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center py-3">
                    <span className="text-sm text-primary mr-3">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-medium">
                      {feature.title}
                    </h3>
                  </div>
                  <div style={{ 
                    transform: activeFeature === index ? 'rotate(90deg)' : 'none',
                    color: activeFeature === index ? 'rgb(255, 189, 152)' : 'inherit'
                  }}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
                
                {activeFeature === index && (
                  <div className="overflow-hidden">
                    <div className="py-4 px-4 pr-6">
                      <p className="text-gray-300 relative">
                        {feature.description}
                      </p>
                      
                      {/* Mobile Payment Flow Demo */}
                      <div className="md:hidden relative overflow-hidden mt-6 bg-neutral-900/40 border border-neutral-800/40 rounded-lg p-4">
                        <div className="p-6 rounded-lg w-full relative space-y-8">
                          <div className="border glass-card rounded-lg shadow-md p-4 relative">
                            <div className="flex items-center">
                              <img 
                                alt="User Avatar" 
                                width="32" 
                                height="32" 
                                className="w-8 h-8 rounded-full mr-3" 
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                              />
                              <div>
                                <div className="text-sm text-white">Alec Erasmus purchased</div>
                                <div className="text-xs text-gray-300">AI Headshots Plus</div>
                              </div>
                              <div className="ml-auto text-green-400 font-medium">+$35.00</div>
                            </div>
                          </div>
                          
                          <div className="border glass-card rounded-lg p-4 relative">
                            <div className="text-center font-medium mb-2 text-white">Merchant of Record</div>
                            <div className="space-y-2">
                              {[
                                "Global Payment Gateway",
                                "Tax Collection + Remittance", 
                                "Payment Processing",
                                "Refunds + Chargebacks",
                                "Risk Analysis + Fraud"
                              ].map((item, i) => (
                                <div key={i} className="flex items-center text-sm text-gray-200">
                                  <div className="w-4 h-4 rounded-full bg-gray-700 text-green-400 flex items-center justify-center mr-2 text-xs">
                                    ✓
                                  </div>
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border glass-card rounded-lg p-4 relative">
                            <div className="flex items-center">
                              <div className="w-6 h-6 bg-neutral-800 rounded mr-3 flex items-center justify-center">
                                💳
                              </div>
                              <div>
                                <div className="text-sm text-white">Bank Payout Processed</div>
                                <div className="text-xs text-gray-300">JPMORGAN **** 4213</div>
                              </div>
                              <div className="ml-auto text-green-400 font-medium">+$33.35</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex justify-center">
                <div className="shrink-0 bg-border h-[1px] w-11/12"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Payment Flow Demo */}
        <div className="absolute p-4 md:flex items-center justify-center overflow-hidden hidden h-[608px] top-[10.3rem] right-0 left-1/2 bg-neutral-900/60 border border-primary/20 opacity-80 rounded-lg">
          <div className="hidden md:block cursor-default w-full">
            <div className="relative z-10">
              <div className="p-6 rounded-lg w-full relative space-y-8">
                <div className="border glass-card rounded-lg shadow-md p-4 relative">
                  <div className="flex items-center">
                    <img 
                      alt="User Avatar" 
                      width="32" 
                      height="32" 
                      className="w-8 h-8 rounded-full mr-3" 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    />
                    <div>
                      <div className="text-sm text-white">Alec Erasmus purchased</div>
                      <div className="text-xs text-gray-300">AI Headshots Plus</div>
                    </div>
                    <div className="ml-auto text-green-400 font-medium">+$35.00</div>
                  </div>
                </div>

                <div className="border glass-card rounded-lg p-4 relative">
                  <div className="text-center font-medium mb-2 text-white">Merchant of Record</div>
                  <div className="space-y-2">
                    {[
                      "Global Payment Gateway",
                      "Tax Collection + Remittance", 
                      "Payment Processing",
                      "Refunds + Chargebacks",
                      "Risk Analysis + Fraud"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-200">
                        <div className="w-4 h-4 rounded-full bg-gray-700 text-green-400 flex items-center justify-center mr-2 text-xs">
                          ✓
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute bottom-0 translate-y-1/2 w-6 h-6 flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full backdrop-blur-sm border border-white/10 opacity-80"></div>
                    <div className="absolute inset-0 animate-pulse bg-primary/5 rounded-full backdrop-blur-sm"></div>
                    <svg className="text-white/90 relative z-20 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                </div>

                <div className="border glass-card rounded-lg p-4 relative">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-neutral-800 rounded mr-3 flex items-center justify-center">
                      💳
                    </div>
                    <div>
                      <div className="text-sm text-white">Bank Payout Processed</div>
                      <div className="text-xs text-gray-300">JPMORGAN **** 4213</div>
                    </div>
                    <div className="ml-auto text-green-400 font-medium">+$33.35</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlowSection;