import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

const ProductsServicesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Products & Services
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Arthur delivers the inputs, expertise, and supply chain strength to help growers produce high-quality crops—and to help partners source them with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* On the Farm Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">On the Farm</h2>
            <p className="text-lg text-arthur-dark mb-4">
              At Arthur, agronomy isn't a sideline—it's a service.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              Our team doesn't just sell what's on the shelf. We scout, we test, and we stand behind our recommendations because we've put them through the paces—on the farm, in our own trials, and across the acres we serve. With tools like precision mapping, variable-rate application, and local yield data, we help you make every pass count.
            </p>
            <p className="text-lg text-arthur-dark mb-4">
              We don't push programs. We build plans. That means putting your return ahead of our margin and earning trust the old-fashioned way: handshakes.
            </p>
            <p className="text-lg text-arthur-dark mb-8">
              From seed selection to crop protection to timing your inputs, we're in your corner—backed by a century of experience, a commitment to good science, and a belief that the best agronomy is local.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Agronomy Centers */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Agronomy Centers</h3>
                  <p className="text-arthur-dark mb-6">
                    Strategically located agronomy hubs with deep product inventory and trusted crop advisors.
                  </p>
                  <Link href="/products-services/agronomy-centers" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Crop Inputs */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Crop Inputs</h3>
                  <p className="text-arthur-dark mb-6">
                    A full lineup of leading seed, crop protection, and nutrition products.
                  </p>
                  <Link href="/products-services/crop-inputs" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Custom Application & Trucking */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Custom Application & Trucking</h3>
                  <p className="text-arthur-dark mb-6">
                    Timely, efficient, and precise application of crop nutrients and protection. Trucking that's available when and where you need it.
                  </p>
                  <Link href="/products-services/custom-application-trucking" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off the Farm Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">Off the Farm</h2>
            <p className="text-lg text-arthur-dark mb-8">
              Arthur's work doesn't end at the field's edge. We invest in businesses that take crops further—transforming raw grain into food and pet food ingredients, building traceable supply chains, and supplying wholesale inputs that keep the entire system running.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Premium Ingredients */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Premium Ingredients</h3>
                  <p className="text-arthur-dark mb-6">
                    We supply food and pet food manufacturers with premium grain ingredients, backed by rigorous quality assurance.
                  </p>
                  <Link href="/products-services/premium-ingredients" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Pet Food Manufacturing */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Pet Food Manufacturing</h3>
                  <p className="text-arthur-dark mb-6">
                    Arthur operates a U.S.-based co-manufacturer that produces premium freeze-dried pet food and treats for today's top brands.
                  </p>
                  <Link href="/products-services/pet-food-manufacturing" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Specialty Crops */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Specialty Crops</h3>
                  <p className="text-arthur-dark mb-6">
                    From flax to barley and sunflowers to canola, Arthur manages specialty crop contracts to help growers move their commodity and producers source quality product.
                  </p>
                  <Link href="/products-services/specialty-crops" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Wholesale Fertilizer */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Wholesale Fertilizer</h3>
                  <p className="text-arthur-dark mb-6">
                    Source wholesale bulk fertilizer from modern facilities in Carrington and Berthold, North Dakota.
                  </p>
                  <Link href="/products-services/wholesale-fertilizer" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Trading */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Trading</h3>
                  <p className="text-arthur-dark mb-6">
                    Arthur's unique platform and close relationships with growers and suppliers across the northern tier of the U.S. put us in a position to supply a wide variety of customers.
                  </p>
                  <Link href="/products-services/trading" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Research & Development */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-arthur-blue mb-4">Research & Development</h3>
                  <p className="text-arthur-dark mb-6">
                    Through Arthur's R&D platform, we conduct replicated trials and field-scale custom research to validate performance and return on investment.
                  </p>
                  <Link href="/products-services/research-development" className="text-arthur-blue hover:text-arthur-gold font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsServicesPage;
