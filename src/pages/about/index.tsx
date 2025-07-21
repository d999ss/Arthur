import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Arthur is a family-owned agribusiness with over a century of history and a clear focus on the future. 
              Our company is built on relationships, results, and doing things the right way.
            </p>
            <Link href="/about/history" className="text-arthur-blue hover:text-arthur-gold font-medium">
              A look at our history →
            </Link>
          </div>
        </div>
      </section>

      {/* The Arthur Advantage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">The Arthur Advantage</h2>
            <p className="text-lg text-arthur-dark mb-4">
              Agriculture needs more than efficiency. It needs options.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              That's what The Arthur Companies has offered for over a century: a real alternative. We're not a co-op. 
              We're not a corporate. We're a family-owned, professionally run agribusiness platform competing in markets 
              where competition is disappearing.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              As the industry consolidates and decisions drift further from the farm, Arthur stays rooted. We reinvest locally, 
              move quickly, and deliver value from inputs to end-use—all without asking growers to give up their independence.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              Our mission is to enable prosperity for our customers and our communities. Our model makes that possible and 
              our values keep us focused on earning that trust year after year.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">OUR PURPOSE</h2>
            <p className="text-xl text-arthur-dark mb-8 italic">
              To enable growth and prosperity with our customers and our communities by providing competitive markets, 
              superior products, and dependable experts that deliver exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-8 text-center">OUR VALUES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Growth */}
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">GROWTH</h3>
                <p className="text-arthur-dark">
                  Whether it's our customers' businesses or expanding our service footprint, growth is integral to who we are 
                  and where we're headed. We believe growth is a choice, and seeding growth is at the core of everything we do. 
                  This mindset guides every decision we make.
                </p>
              </div>

              {/* Service */}
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">SERVICE</h3>
                <p className="text-arthur-dark">
                  Consistency where it counts — our foundation was built on our dedication to serving growers, team members, 
                  and our communities. We seek to provide value in every interaction we have with all of our stakeholders.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">INTEGRITY</h3>
                <p className="text-arthur-dark">
                  Do it the right way every time — it's the best way to gain respect and how we've been able to maintain our 
                  loyal customer base for over a century. If a job is worth doing, it's worth doing it right the first time.
                </p>
              </div>

              {/* Trust */}
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">TRUST</h3>
                <p className="text-arthur-dark">
                  We do not take trust for granted; our team knows that we must earn trust every single day by striving for 
                  excellence in all we do. We earn trust by consistently doing what we say we will do.
                </p>
              </div>

              {/* Pioneering */}
              <div className="bg-arthur-cream p-6 rounded-lg md:col-span-2">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">PIONEERING</h3>
                <p className="text-arthur-dark">
                  Trailblazing isn't a culture we created, it's something we inherited and strive for in all aspects of our business. 
                  We are not satisfied with the status quo and are committed to creating new opportunities and higher levels of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about/history" className="bg-arthur-blue text-white p-6 rounded-lg text-center hover:bg-arthur-gold transition duration-300">
                <h3 className="text-xl font-bold mb-2">History</h3>
                <p className="text-sm">Learn about our century-long journey</p>
              </Link>
              
              <Link href="/about/leadership-team" className="bg-arthur-blue text-white p-6 rounded-lg text-center hover:bg-arthur-gold transition duration-300">
                <h3 className="text-xl font-bold mb-2">Leadership Team</h3>
                <p className="text-sm">Meet the people driving Arthur forward</p>
              </Link>
              
              <Link href="/about/newsroom" className="bg-arthur-blue text-white p-6 rounded-lg text-center hover:bg-arthur-gold transition duration-300">
                <h3 className="text-xl font-bold mb-2">Newsroom</h3>
                <p className="text-sm">Latest updates and announcements</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
