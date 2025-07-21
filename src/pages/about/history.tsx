import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface TimelineItem {
  year: string;
  milestone: string;
}

const HistoryPage: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    { year: '1906', milestone: 'Joseph Arthur Burgum incorporates the Arthur Farmers Elevator; begins powering the town with surplus electricity by 1915.' },
    { year: '1925', milestone: 'Founder Joseph passes; son Leland Burgum becomes president, widow Jessamine joins the board—cementing multigenerational stewardship.' },
    { year: '1930s', milestone: 'Survives Great Depression; buys land, printing plant; launches hybrid-corn seed to boost yields.' },
    { year: '1957', milestone: 'Becomes first ND retailer for bulk ammonium nitrate.' },
    { year: '1960', milestone: 'Builds North Dakota's first retail bulk-fertilizer plant, anchoring agronomy arm.' },
    { year: '1965-68', milestone: 'Acquires Erie and Ayr elevators, extending footprint.' },
    { year: '1981', milestone: 'Acquires Harvey Farmers Elevator; annual volume climbs.' },
    { year: '1984', milestone: 'Launches AgResource as wholesale-fertilizer arm.' },
    { year: '1985', milestone: 'Adds feed business in Harvey; throughput hits 6 million bushels.' },
    { year: '1991', milestone: 'Partners with breeder Mounir Abdallah for Proseed trait-focused seeds.' },
    { year: '1992', milestone: 'Acquires Carrington warehouse for AgResource expansion.' },
    { year: '2001', milestone: 'Completes 110-car shuttle loader at Ayr; acquires Anamoose site; volume to 8.6 million bushels.' },
    { year: '2005-09', milestone: 'Acquires Page and Buffalo elevators, completing east-west corridor.' },
    { year: '2013', milestone: 'Brooks Burgum named CEO (fourth generation); launches Anchor Ingredients for premium sourcing/processing.' },
    { year: '2015', milestone: 'System throughput hits record 35 million bushels—13× 1985 levels.' },
    { year: '2021', milestone: 'James Burgum becomes CEO.' },
    { year: '2023', milestone: 'Acquires seven Idaho elevators from Thresher Artisan Wheat.' },
    { year: '2024', milestone: 'Through Anchor Ingredients, launches North Freeze Dry pet-food plant.' },
    { year: '2025', milestone: 'Expands into wheat breeding program for high-protein varieties.' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Roots & Reinvention
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Founded in 1906, Arthur has grown through generations of change. Our history reflects a commitment to innovation, partnership, and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p>
                On a frigid February morning in 1906, Joseph Arthur Burgum incorporated the Arthur Farmers Elevator in a single-track grain town that bore his middle name. The elevator was more than a grain house; it was a promise that local growers would keep ownership of their crop story from field to market. By 1915, the little company was literally powering the community—generating its own electricity during the workday and selling the surplus back to the town each night, an early signal that Arthur would never be content with the status quo.
              </p>
              <p>
                When Joseph died in 1925, his son Leland stepped in while Joseph's widow, Jessamine, stayed on the board, ensuring that stewardship, not just ownership, remained a family affair. The 1930s brought the Great Depression, yet Arthur's elevator survived, buying land and even a printing plant. Even in lean years, the company pushed ahead with hybrid-corn seed production, helping growers lift yields long before "ag-tech" was a buzzword.
              </p>
              <p>
                The post-war era showcased Arthur's taste for firsts. In 1957, it became the inaugural North Dakota retailer to apply bulk ammonium nitrate, and by 1960, it had built the state's first retail bulk-fertilizer plant—laying the groundwork for the modern plant-nutrition business. Acquisitions and expansions followed, with throughput climbing to millions of bushels. The company's willingness to test, learn, and adapt kept growers competitive when margins were razor-thin.
              </p>
              <p>
                Diversification marked the later decades. Partnering on seed genetics, building shuttle facilities, and launching downstream businesses like Anchor Ingredients. In 2013, Brooks Burgum became CEO, ushering in the fourth generation. James Burgum followed in 2021. New geographies, genetics, and markets—each an echo of the founding instinct to meet farmers where the next opportunity lies.
              </p>
              <p>
                Today, Arthur stands on the same foundations: Integrity. Service. Excellence. Pioneering. From electrifying a prairie town to optimizing global supply chains, our history is a series of bold steps to keep farmers first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-10 text-center">Timeline</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-arthur-blue"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Year */}
                    <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                      <div className="bg-arthur-blue text-white text-2xl font-bold py-2 px-4 rounded-lg">
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Circle on the line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-arthur-gold border-4 border-white"></div>
                    
                    {/* Milestone */}
                    <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-arthur-dark">{item.milestone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/about" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300 text-center">
                Back to About
              </Link>
              <Link href="/about/leadership-team" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300 text-center">
                Meet Our Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
