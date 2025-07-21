import React from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-arthur-cream">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Arthur: Where Innovation Grows, From the Ground Up.
            </h1>
            <p className="text-xl md:text-2xl text-arthur-dark mb-8">
              100 years in the field—and we're just getting started.
            </p>
            <p className="text-lg text-arthur-dark mb-8">
              Every day, farmers across the Northern Plains rely on Arthur for more than just market access and inputs. 
              They count on us for straight answers, honest service, and solutions that work. From local agronomy centers 
              to leading-edge research, Arthur combines the grit of a century-long legacy with a vision for what agriculture can be.
            </p>
          </div>
        </div>
        {/* Hero image would be added here */}
      </section>

      {/* For Growers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">For Growers</h2>
            <p className="text-lg text-arthur-dark mb-8">
              You know your acres. We know the market. Our team shows up, answers the phone, and competes to earn your business 
              whether you're hauling to an Arthur elevator, planning for next year with our agronomy experts, or growing under 
              contract for specialty end-users.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/grain" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                Grain
              </Link>
              <Link href="/products-services" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                Products & Services
              </Link>
              <Link href="/grain/cash-bids-futures" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                Cash Bids
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">For Partners</h2>
            <p className="text-lg text-arthur-dark mb-8">
              Arthur is a growing agribusiness platform trusted by processors, suppliers, and our industry-leading peers. 
              Our businesses span grain origination, crop inputs, research, logistics, and specialty ingredients—all supported 
              by a culture of integrity and execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products-services" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                Products & Services
              </Link>
              <Link href="/innovation" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                Innovation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Who We Are</h2>
            <p className="text-lg text-arthur-dark mb-4">
              Since 1906, we've built relationships that last. What began as a single elevator in Arthur, ND, 
              has grown into a multi-state operation supporting thousands of acres.
            </p>
            <p className="text-lg text-arthur-dark mb-8">
              We pioneered fertilizer use in North Dakota, powered our town before the grid reached it, and reinvested 
              earnings into seed genetics, new facilities, and next-generation technology. Today, our fourth-generation 
              family business is still taking the next hill on behalf of the growers and partners who put their trust in us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">What We Stand For</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-arthur-gold font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Integrity:</span> We do what we say we'll do—no excuses.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-arthur-gold font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Service:</span> We care for the land, our communities, and your trust.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-arthur-gold font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Pioneering:</span> From new genetics to digital tools, we're on the leading edge.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-arthur-gold font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Excellence:</span> We invest in people, platforms, and partnerships for the long haul.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="italic text-xl text-arthur-dark mb-4">
              "Arthur is the kind of company that shows up when it matters. We count on them every year, and every year they deliver."
            </blockquote>
            <p className="text-right font-medium">— Grower, Cass County</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
