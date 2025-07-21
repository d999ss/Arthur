import React, { useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  slug: string;
}

const NewsroomPage: React.FC = () => {
  // Sample news data - in a real implementation, this would come from a CMS
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Arthur Companies Expands Wheat Breeding Program',
      date: 'July 15, 2025',
      excerpt: 'New investment in Northern Plains-tough, high-protein wheat varieties set for 2026 release, building on our commitment to regional agriculture.',
      category: 'Press Release',
      slug: 'wheat-breeding-program-expansion'
    },
    {
      id: '2',
      title: 'North Freeze Dry Pet Food Plant Opens in Grand Forks',
      date: 'June 3, 2025',
      excerpt: 'Anchor Ingredients, an Arthur Companies subsidiary, launches state-of-the-art freeze-dried pet food ingredient facility to meet growing demand.',
      category: 'Company News',
      slug: 'north-freeze-dry-opening'
    },
    {
      id: '3',
      title: 'Arthur Trading Announces New Specialty Contracts',
      date: 'May 22, 2025',
      excerpt: 'New premium contracts for high-protein wheat and specialty crops offer growers additional marketing options for the 2025 harvest.',
      category: 'Market Update',
      slug: 'specialty-contracts-2025'
    },
    {
      id: '4',
      title: 'Latitude47 Research Releases 2025 Crop Trial Results',
      date: 'April 10, 2025',
      excerpt: 'Annual field trials show promising results for drought-resistant corn varieties and new fungicide applications in wheat.',
      category: 'Research',
      slug: 'crop-trial-results-2025'
    },
    {
      id: '5',
      title: 'Arthur Companies Named Top Ag Employer in North Dakota',
      date: 'March 8, 2025',
      excerpt: 'Recognition highlights our commitment to employee development, community investment, and sustainable business practices.',
      category: 'Awards',
      slug: 'top-ag-employer-award'
    },
    {
      id: '6',
      title: 'New Grain App Features Released for Harvest Season',
      date: 'February 15, 2025',
      excerpt: 'Updated mobile app provides real-time pricing, delivery scheduling, and contract management tools for growers.',
      category: 'Technology',
      slug: 'grain-app-update-2025'
    }
  ];

  // Filter categories
  const categories = ['All', ...Array.from(new Set(newsItems.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter news items based on selected category
  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Newsroom
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Stay updated with the latest news, announcements, and insights from The Arthur Companies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-start gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md transition duration-300 ${
                  activeCategory === category
                    ? 'bg-arthur-blue text-white'
                    : 'bg-gray-100 text-arthur-dark hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((newsItem) => (
                <div key={newsItem.id} className="bg-arthur-cream rounded-lg overflow-hidden shadow-md">
                  {/* Placeholder for news image */}
                  <div className="h-48 bg-arthur-gray relative">
                    <div className="absolute top-0 right-0 bg-arthur-blue text-white px-3 py-1">
                      {newsItem.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-arthur-gray mb-2">{newsItem.date}</p>
                    <h2 className="text-xl font-bold text-arthur-blue mb-3">
                      {newsItem.title}
                    </h2>
                    <p className="text-arthur-dark mb-6">{newsItem.excerpt}</p>
                    <Link 
                      href={`/about/newsroom/${newsItem.slug}`} 
                      className="text-arthur-blue hover:text-arthur-gold font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-arthur-gray">No news items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Media Contact</h2>
            <p className="text-lg text-arthur-dark mb-6">
              For press inquiries, interview requests, or additional information about The Arthur Companies, please contact our communications team.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <p className="font-bold text-arthur-blue">Media Relations</p>
              <p className="text-arthur-dark">media@arthurcompanies.com</p>
              <p className="text-arthur-dark">701-555-0123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Press Kit</h2>
            <p className="text-lg text-arthur-dark mb-8">
              Download our press kit for company information, leadership bios, logos, and high-resolution images.
            </p>
            <a 
              href="#" 
              className="bg-arthur-blue text-white px-8 py-3 rounded-md hover:bg-arthur-gold transition duration-300 inline-block"
            >
              Download Press Kit
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/about" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300 text-center">
                Back to About
              </Link>
              <Link href="/about/leadership-team" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300 text-center">
                Meet Our Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsroomPage;
