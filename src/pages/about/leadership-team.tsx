import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface LeadershipMember {
  name: string;
  title: string;
  bio: string;
  email: string;
}

const LeadershipTeamPage: React.FC = () => {
  const leadershipTeam: LeadershipMember[] = [
    {
      name: 'Brooks Burgum',
      title: 'Chairman',
      bio: 'A native of Arthur, ND, Brooks graduated from University of North Dakota with a BA in Political Science and later from Southern Methodist University with an MBA in Finance. He leads with a focus on innovation, helping growers meet global agriculture challenges.',
      email: 'brooks@arthurcompanies.com'
    },
    {
      name: 'James Burgum',
      title: 'CEO',
      bio: 'Originally from Casselton, ND, James earned a BA in Business Administration from North Dakota State University. Prior to Arthur Companies, James was a co-founder and Partner at Arthur Ventures. He stepped in as CEO in 2021, guiding fourth-generation growth.',
      email: 'james@arthurcompanies.com'
    },
    {
      name: 'Eric Ingvaldson',
      title: 'CFO',
      bio: 'Eric was born and raised in the Twin Cities and attended the University of Minnesota – Carlson School of Management for Accounting and Finance. He oversees financial strategy, keeping our growth self-financed and focused on long-term value.',
      email: 'eric@arthurcompanies.com'
    },
    {
      name: 'Kevin Karel',
      title: 'VP of Operations',
      bio: 'Kevin was raised in Bismarck, ND and is a certified public accountant. He earned a BS in Accounting from North Dakota State University. He manages daily operations across elevators and facilities.',
      email: 'kevin@arthurcompanies.com'
    },
    {
      name: 'Justin Knott',
      title: 'General Manager-Eastern, ND / VP of Growth',
      bio: 'Justin grew up in Red Lake Falls, MN, earned a BS in Agronomy from University of Minnesota – Crookston and a MS in Entomology from North Dakota State University. He drives expansion and grower services in eastern ND.',
      email: 'justin@arthurcompanies.com'
    },
    {
      name: 'Patrick Erickson',
      title: 'VP of Agronomy',
      bio: 'A native of Roseau, MN, Patrick earned a BA in crop and weed science from North Dakota State University. He heads agronomy centers and custom-app fleet, walking plots to deliver real recommendations.',
      email: 'patrick@arthurcompanies.com'
    },
    {
      name: 'Dallas Hansen',
      title: 'Director of Trading - Arthur Trading LLC',
      bio: 'Dallas grew up on a farm outside of Hunter, ND, and earned a BA in History from Yale University. Previously at Louis Dreyfus Company for 10 years, he handles trading strategy for wheat and commodities.',
      email: 'dallas@arthurcompanies.com'
    },
    {
      name: 'Brentt Roberts',
      title: 'General Manager - Central North Dakota',
      bio: 'Brentt grew up on a small family farm outside of Vancouver, WA and earned his BS in Agriculture from Washington State University. Prior to Arthur, he was a Senior Export Corn Merchandiser in the Pacific Northwest.',
      email: 'brentt@arthurcompanies.com'
    },
    {
      name: 'Seth Heidorn',
      title: 'VP of Grain',
      bio: 'Seth has spent his career merchandising and trading in wheat markets and earned his MBA from the University of Minnesota. He oversees grain origination and risk management.',
      email: 'seth@arthurcompanies.com'
    },
    {
      name: 'Jeremy TenBroek',
      title: 'CIO',
      bio: 'Jeremy grew up on a ranch in south central North Dakota and graduated from North Dakota State University, with a BS in Management Information Systems. He leads tech integration, including ERP and digital tools.',
      email: 'jeremy@arthurcompanies.com'
    },
    {
      name: 'Hank Brown',
      title: 'Assistant General Manager - Eastern, ND',
      bio: 'Hank grew up in southern Minnesota and earned a BA in Economics from St. Johns University, and a MS in Agricultural Economics from South Dakota State University. He supports eastern operations and growth.',
      email: 'hank@arthurcompanies.com'
    },
    {
      name: 'Nick Rygg',
      title: 'Agronomy Manager - Central, ND',
      bio: 'Prior to starting with The Arthur Companies, Nick grew up in the Red River Valley of North Dakota and earned a BA in Agriculture Economics from NDSU. He manages central agronomy hubs and advisors.',
      email: 'nick@arthurcompanies.com'
    },
    {
      name: 'Austin Hanny',
      title: 'General Manager - Idaho',
      bio: 'Austin grew up farming in Idaho and graduated from Utah State University, with BS degrees in Economics and Finance. He oversees Idaho elevators and regional operations.',
      email: 'austin@arthurcompanies.com'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              Meet the leaders driving Arthur forward—experienced, grounded, and committed to our growers and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-arthur-cream rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  {/* Placeholder for headshot */}
                  <div className="w-32 h-32 mx-auto mb-4 bg-arthur-gray rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {leader.name.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-arthur-blue text-center mb-1">{leader.name}</h2>
                  <p className="text-arthur-gray text-center mb-4">{leader.title}</p>
                  <p className="text-arthur-dark mb-6">{leader.bio}</p>
                  <div className="text-center">
                    <a 
                      href={`mailto:${leader.email}`}
                      className="inline-block bg-arthur-blue text-white px-4 py-2 rounded-md hover:bg-arthur-gold transition duration-300"
                    >
                      Email {leader.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
              <Link href="/about/history" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300 text-center">
                Explore Our History
              </Link>
              <Link href="/about/newsroom" className="bg-arthur-blue text-white px-6 py-3 rounded-md hover:bg-arthur-gold transition duration-300 text-center">
                Visit Newsroom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeadershipTeamPage;
