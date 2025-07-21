import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface InsightArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  slug: string;
}

const GrowerInsightsPage: React.FC = () => {
  // Sample insights data - in a real implementation, this would come from a CMS
  const insightArticles: InsightArticle[] = [
    {
      id: '1',
      title: 'Optimizing Nitrogen Applications in Wheat',
      date: 'July 10, 2025',
      author: 'Patrick Erickson, VP of Agronomy',
      excerpt: 'New research from our field trials shows how split applications can improve protein content while reducing overall nitrogen use.',
      category: 'Agronomy',
      slug: 'optimizing-nitrogen-wheat'
    },
    {
      id: '2',
      title: 'Market Outlook: Specialty Grains in 2025',
      date: 'June 28, 2025',
      author: 'Seth Heidorn, VP of Grain',
      excerpt: 'Analysis of current trends in specialty grain markets and opportunities for premium contracts in the coming season.',
      category: 'Markets',
      slug: 'specialty-grains-outlook-2025'
    },
    {
      id: '3',
      title: 'Drought-Resistant Varieties: Field Performance Review',
      date: 'June 15, 2025',
      author: 'Nick Rygg, Agronomy Manager',
      excerpt: 'Results from our multi-year trials of drought-resistant wheat and corn varieties across different soil types and conditions.',
      category: 'Research',
      slug: 'drought-resistant-varieties-review'
    },
    {
      id: '4',
      title: 'Maximizing ROI with Precision Agriculture',
      date: 'May 30, 2025',
      author: 'Justin Knott, VP of Growth',
      excerpt: 'How variable rate technology and soil mapping can improve input efficiency and boost yields in challenging field conditions.',
      category: 'Technology',
      slug: 'precision-agriculture-roi'
    },
    {
      id: '5',
      title: 'Managing Input Costs for the 2026 Season',
      date: 'May 12, 2025',
      author: 'Brentt Roberts, General Manager',
      excerpt: 'Strategies for locking in favorable input prices and managing risk in an uncertain economic environment.',
      category: 'Business',
      slug: 'managing-input-costs-2026'
    },
    {
      id: '6',
      title: 'Soil Health Practices That Pay',
      date: 'April 25, 2025',
      author: 'Patrick Erickson, VP of Agronomy',
      excerpt: 'Practical approaches to improving soil health that deliver both environmental and economic benefits to your operation.',
      category: 'Agronomy',
      slug: 'soil-health-practices'
    }
  ];

  // Filter categories
  const categories = ['All', ...Array.from(new Set(insightArticles.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter articles based on selected category
  const filteredArticles = activeCategory === 'All' 
    ? insightArticles 
    : insightArticles.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Grower Insights
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Expert analysis, research findings, and practical advice to help you make informed decisions for your operation.
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

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-arthur-cream rounded-lg overflow-hidden shadow-md">
                  {/* Placeholder for article image */}
                  <div className="h-48 bg-arthur-gray relative">
                    <div className="absolute top-0 right-0 bg-arthur-blue text-white px-3 py-1">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-arthur-gray mb-2">{article.date} • By {article.author}</p>
                    <h2 className="text-xl font-bold text-arthur-blue mb-3">
                      {article.title}
                    </h2>
                    <p className="text-arthur-dark mb-6">{article.excerpt}</p>
                    <Link 
                      href={`/grower-insights/${article.slug}`} 
                      className="text-arthur-blue hover:text-arthur-gold font-medium"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-arthur-gray">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Research Highlights Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-8 text-center">Research Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Latitude47 Research</h3>
                <p className="text-arthur-dark mb-4">
                  Our field research division conducts practical, farm-scale trials across multiple locations and growing conditions.
                </p>
                <Link 
                  href="/innovation" 
                  className="text-arthur-blue hover:text-arthur-gold font-medium"
                >
                  Learn More About Our Research →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-arthur-blue mb-3">Frontier Genetics</h3>
                <p className="text-arthur-dark mb-4">
                  Our wheat breeding program focuses on developing varieties with improved protein content, disease resistance, and yield potential.
                </p>
                <Link 
                  href="/innovation" 
                  className="text-arthur-blue hover:text-arthur-gold font-medium"
                >
                  Explore Our Genetics Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Stay Informed</h2>
            <p className="text-lg text-arthur-dark mb-8">
              Subscribe to receive our latest insights, market updates, and research findings directly to your inbox.
            </p>
            
            <div className="bg-arthur-cream p-8 rounded-lg shadow-md">
              <form className="max-w-md mx-auto">
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arthur-blue"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Have Questions?</h2>
            <p className="text-lg text-arthur-dark mb-8">
              Connect with our agronomy team for personalized advice and recommendations for your operation.
            </p>
            <Link 
              href="/contact-us" 
              className="bg-arthur-blue text-white px-8 py-3 rounded-md hover:bg-arthur-gold transition duration-300 inline-block"
            >
              Contact an Expert
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrowerInsightsPage;
