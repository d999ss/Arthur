import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

const GrainPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Grain Marketing, Grounded in Trust
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              At Arthur, we deliver grain marketing services that combine local knowledge with market insight. 
              Our facilities are built for speed, our team is built for service, and our approach is built around your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cash Bids & Futures */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-arthur-blue mb-4">Cash Bids & Futures</h2>
                <p className="text-arthur-dark mb-6">
                  Access local grain prices and futures through the Arthur Companies app.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link href="https://app.bushel.com/download" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Download Bushel App
                  </Link>
                </div>
              </div>
            </div>

            {/* Locations & Hours */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-arthur-blue mb-4">Locations & Hours</h2>
                <p className="text-arthur-dark mb-6">
                  Check local bids, view extended hours, service announcements, and contact merchandisers.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link href="/contact/locations" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    View Locations
                  </Link>
                </div>
              </div>
            </div>

            {/* Specialty Contracts */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-arthur-blue mb-4">Specialty Contracts</h2>
                <p className="text-arthur-dark mb-6">
                  Explore options to bring specialty crops to market.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link href="/grain/specialty-contracts" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/grain/cash-bids-futures" className="bg-arthur-blue text-white px-8 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                View Local Bids
              </Link>
              <Link href="/contact/locations" className="bg-arthur-blue text-white px-8 py-3 rounded-md hover:bg-arthur-gold transition duration-300">
                Contact Our Merchandisers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrainPage;
