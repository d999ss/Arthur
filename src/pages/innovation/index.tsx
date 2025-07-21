import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

const InnovationPage: React.FC = () => {
  // Sample venture investments data
  const ventureInvestments = [
    { name: 'SeedZ', description: 'Digital seed management platform' },
    { name: 'Levridge', description: 'Cloud-based ERP for agriculture' },
    { name: 'Balcão', description: 'Agricultural trading platform' },
    { name: 'Ag Startup Engine', description: 'Ag-tech accelerator' },
    { name: 'EpiCrop', description: 'Epigenetic crop improvement' },
    { name: 'Parcerro Ventures', description: 'Agricultural investment fund' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Innovation in the Field
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              We believe better tools, stronger genetics, and quality data advances the future of agriculture—for growers, buyers, and the land.
            </p>
          </div>
        </div>
      </section>

      {/* Venture Platform Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Venture Platform</h2>
            <p className="text-lg text-arthur-dark mb-4">
              Before most businesses had even touched a keyboard, Arthur was backing software that would change the way industries operated. In the early 1990s, we were the sole owner of Great Plains Software, a company that revolutionized accounting systems for small and midsize businesses. That venture went public and ultimately became the backbone of what is now Microsoft Dynamics.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              It wasn't just a good investment—it was a signal of how we think: long-term, systems-focused, and unafraid to bet on what's next.
            </p>
            <p className="text-lg text-arthur-dark mb-8">
              Today, that mindset continues to guide our innovation platform. We don't chase buzzwords. We back ideas that solve real problems in agriculture, logistics, and finance because better tools build better businesses, and better businesses support stronger farms.
            </p>

            {/* Venture Investments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {ventureInvestments.map((investment, index) => (
                <div key={index} className="bg-arthur-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-arthur-blue mb-2">{investment.name}</h3>
                  <p className="text-arthur-dark">{investment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Invest Differently Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Why We Invest Differently</h2>
            <p className="text-lg text-arthur-dark mb-8">
              Arthur's venture platform isn't structured around exits or fund cycles. We're a family-owned operating company that invests where we see long-term value—not just financial upside. If a tool helps growers farm smarter, or helps ag businesses run cleaner, we get involved. We back companies where our experience, reach, and reputation can move the needle beyond capital alone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-arthur-blue text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-arthur-blue mb-2">Rooted Perspective</h3>
                  <p className="text-arthur-dark">
                    As operators in the ag value chain, we spot what actually works—not just what sounds good in a pitch deck.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-arthur-blue text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-arthur-blue mb-2">Long-Term Alignment</h3>
                  <p className="text-arthur-dark">
                    We've worked with some farm families for four generations. We value patient growth, not manufactured outcomes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-arthur-blue text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-arthur-blue mb-2">Built-In Reach</h3>
                  <p className="text-arthur-dark">
                    Our footprint in grain, agronomy, and ingredients means we can help test, scale, and distribute the right ideas at the right time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-arthur-blue text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-arthur-blue mb-2">Real-World Insight</h3>
                  <p className="text-arthur-dark">
                    We bring field-tested, boots-on-the-ground experience to help entrepreneurs sharpen, simplify, and scale their solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="mailto:innovation@arthurcompanies.com" 
                className="bg-arthur-blue text-white px-8 py-3 rounded-md hover:bg-arthur-gold transition duration-300 inline-block"
              >
                PITCH US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Technology</h2>
            <p className="text-lg text-arthur-dark mb-8">
              We integrate modern tools like cloud-based ERP (Levridge on Microsoft Dynamics 365) for streamlined operations, equity management, and risk tracking. Our digital platforms support everything from commodity processors to grain elevators, making ag businesses more efficient from office to field.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Development Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Research & Development</h2>
            <p className="text-lg text-arthur-dark mb-4">
              Latitude47 Research conducts custom agronomic trials under real farm conditions.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              Frontier Genetics develops elite varieties, with Northern Plains-tough, higher-yield wheat set for 2026 release (expanded wheat breeding program launched in 2025).
            </p>
            <p className="text-lg text-arthur-dark mb-8">
              Together, they deliver practical insights to boost grower profitability.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InnovationPage;
