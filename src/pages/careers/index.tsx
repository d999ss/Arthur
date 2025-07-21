import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface JobListing {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string; // Full-time, Part-time, Seasonal
  description: string;
  requirements: string[];
  postedDate: string;
}

// English and Spanish translations
const translations = {
  en: {
    pageTitle: 'Careers',
    pageSubtitle: 'Join our team and help shape the future of agriculture in the Northern Plains.',
    whyWorkHere: 'Why Work Here',
    whyWorkHereText: 'The Arthur Companies offers competitive compensation, comprehensive benefits, and opportunities for growth in a family-owned business that values its employees as much as its customers.',
    benefits: 'Benefits',
    benefitsList: [
      'Competitive salary and performance bonuses',
      'Health, dental, and vision insurance',
      'Retirement plan with company match',
      'Paid time off and holidays',
      'Professional development opportunities',
      'Employee grain marketing program',
      'Relocation assistance for eligible positions'
    ],
    culture: 'Our Culture',
    cultureText: 'We believe in hard work, honest dealings, and treating people right. Our team members are empowered to make decisions, solve problems, and contribute ideas. We celebrate wins together and support each other through challenges.',
    openPositions: 'Open Positions',
    filterBy: 'Filter by:',
    allLocations: 'All Locations',
    allDepartments: 'All Departments',
    allTypes: 'All Types',
    noJobs: 'No job openings match your criteria. Please adjust your filters or check back later.',
    viewJob: 'View Job',
    applyNow: 'Apply Now',
    postedOn: 'Posted on',
    location: 'Location',
    department: 'Department',
    employmentType: 'Employment Type',
    requirements: 'Requirements',
    languageToggle: 'Español'
  },
  es: {
    pageTitle: 'Carreras',
    pageSubtitle: 'Únase a nuestro equipo y ayude a dar forma al futuro de la agricultura en las Llanuras del Norte.',
    whyWorkHere: '¿Por qué trabajar aquí?',
    whyWorkHereText: 'The Arthur Companies ofrece una compensación competitiva, beneficios completos y oportunidades de crecimiento en una empresa familiar que valora a sus empleados tanto como a sus clientes.',
    benefits: 'Beneficios',
    benefitsList: [
      'Salario competitivo y bonos por desempeño',
      'Seguro médico, dental y de visión',
      'Plan de jubilación con contribución de la empresa',
      'Tiempo libre pagado y días festivos',
      'Oportunidades de desarrollo profesional',
      'Programa de comercialización de granos para empleados',
      'Asistencia de reubicación para puestos elegibles'
    ],
    culture: 'Nuestra Cultura',
    cultureText: 'Creemos en el trabajo duro, los tratos honestos y tratar bien a las personas. Nuestros miembros del equipo están facultados para tomar decisiones, resolver problemas y aportar ideas. Celebramos los éxitos juntos y nos apoyamos mutuamente a través de los desafíos.',
    openPositions: 'Posiciones Abiertas',
    filterBy: 'Filtrar por:',
    allLocations: 'Todas las Ubicaciones',
    allDepartments: 'Todos los Departamentos',
    allTypes: 'Todos los Tipos',
    noJobs: 'No hay vacantes que coincidan con sus criterios. Ajuste sus filtros o vuelva a consultar más tarde.',
    viewJob: 'Ver Trabajo',
    applyNow: 'Aplicar Ahora',
    postedOn: 'Publicado el',
    location: 'Ubicación',
    department: 'Departamento',
    employmentType: 'Tipo de Empleo',
    requirements: 'Requisitos',
    languageToggle: 'English'
  }
};

const CareersPage: React.FC = () => {
  // Language state (English by default)
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const t = translations[language];
  
  // Sample job listings - in a real implementation, these would come from iSolved API
  const jobListings: JobListing[] = [
    {
      id: '1',
      title: 'Grain Merchandiser',
      location: 'Arthur, ND',
      department: 'Grain',
      type: 'Full-time',
      description: 'Responsible for buying and selling grain, managing customer relationships, and developing marketing strategies for producers.',
      requirements: [
        'Bachelor\'s degree in Agriculture, Business, or related field',
        'Strong understanding of grain markets and pricing strategies',
        '2+ years experience in grain merchandising or related field',
        'Excellent communication and negotiation skills'
      ],
      postedDate: '2025-07-01'
    },
    {
      id: '2',
      title: 'Operations Manager',
      location: 'Harvey, ND',
      department: 'Operations',
      type: 'Full-time',
      description: 'Oversee daily operations of grain facility, manage staff, ensure safety compliance, and maintain equipment and facilities.',
      requirements: [
        'Bachelor\'s degree in Agriculture, Business, or related field',
        '5+ years experience in grain operations',
        'Strong leadership and problem-solving skills',
        'Knowledge of safety regulations and grain handling procedures'
      ],
      postedDate: '2025-06-15'
    },
    {
      id: '3',
      title: 'Agronomist',
      location: 'Ayr, ND',
      department: 'Agronomy',
      type: 'Full-time',
      description: 'Provide agronomic consulting services to growers, develop crop plans, and recommend products and practices to optimize yield and profitability.',
      requirements: [
        'Bachelor\'s degree in Agronomy or related field',
        'Certified Crop Advisor (CCA) preferred',
        '3+ years experience in agronomy',
        'Strong knowledge of crop production practices in the Northern Plains'
      ],
      postedDate: '2025-06-28'
    },
    {
      id: '4',
      title: 'Seasonal Grain Handler',
      location: 'Buffalo, ND',
      department: 'Operations',
      type: 'Seasonal',
      description: 'Assist with grain receiving, sampling, and handling during harvest season. Operate equipment and maintain cleanliness of facility.',
      requirements: [
        'High school diploma or equivalent',
        'Valid driver\'s license',
        'Ability to lift 50+ lbs repeatedly',
        'Willingness to work extended hours during harvest season'
      ],
      postedDate: '2025-07-10'
    },
    {
      id: '5',
      title: 'Accounting Specialist',
      location: 'Fargo, ND',
      department: 'Finance',
      type: 'Full-time',
      description: 'Process accounts payable and receivable, assist with financial reporting, and support month-end close procedures.',
      requirements: [
        'Bachelor\'s degree in Accounting or Finance',
        '2+ years accounting experience',
        'Proficiency in Microsoft Excel and accounting software',
        'Strong attention to detail and organizational skills'
      ],
      postedDate: '2025-06-20'
    },
    {
      id: '6',
      title: 'Custom Applicator',
      location: 'Page, ND',
      department: 'Agronomy',
      type: 'Seasonal',
      description: 'Operate application equipment to apply fertilizer and crop protection products. Maintain equipment and keep accurate application records.',
      requirements: [
        'High school diploma or equivalent',
        'Commercial driver\'s license (CDL)',
        'Commercial applicator\'s license or ability to obtain',
        'Experience operating farm equipment'
      ],
      postedDate: '2025-07-05'
    }
  ];

  // Filter states
  const [locationFilter, setLocationFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>(jobListings);

  // Get unique locations, departments, and types for filters
  const locations = ['All', ...Array.from(new Set(jobListings.map(job => job.location)))];
  const departments = ['All', ...Array.from(new Set(jobListings.map(job => job.department)))];
  const types = ['All', ...Array.from(new Set(jobListings.map(job => job.type)))];

  // Apply filters when they change
  useEffect(() => {
    let result = jobListings;
    
    if (locationFilter !== 'All') {
      result = result.filter(job => job.location === locationFilter);
    }
    
    if (departmentFilter !== 'All') {
      result = result.filter(job => job.department === departmentFilter);
    }
    
    if (typeFilter !== 'All') {
      result = result.filter(job => job.type === typeFilter);
    }
    
    setFilteredJobs(result);
  }, [locationFilter, departmentFilter, typeFilter]);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', options);
  };

  return (
    <Layout>
      {/* Language Toggle */}
      <div className="bg-arthur-blue py-2">
        <div className="container mx-auto px-4 text-right">
          <button 
            onClick={toggleLanguage}
            className="text-white hover:text-arthur-gold transition duration-300"
          >
            {t.languageToggle}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-arthur-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-arthur-blue mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-arthur-dark mb-8">
              {t.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-arthur-blue mb-6">{t.whyWorkHere}</h2>
            <p className="text-lg text-arthur-dark mb-8">
              {t.whyWorkHereText}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-4">{t.benefits}</h3>
                <ul className="space-y-2">
                  {t.benefitsList.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-arthur-blue mr-2">•</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Culture */}
              <div className="bg-arthur-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-arthur-blue mb-4">{t.culture}</h3>
                <p className="text-arthur-dark">
                  {t.cultureText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-arthur-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-arthur-blue mb-8 text-center">{t.openPositions}</h2>
            
            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-medium text-arthur-blue mb-4">{t.filterBy}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-arthur-gray mb-2">{t.location}</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    {locations.map((location, index) => (
                      <option key={index} value={location}>{location === 'All' ? t.allLocations : location}</option>
                    ))}
                  </select>
                </div>
                
                {/* Department Filter */}
                <div>
                  <label className="block text-sm font-medium text-arthur-gray mb-2">{t.department}</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                  >
                    {departments.map((department, index) => (
                      <option key={index} value={department}>{department === 'All' ? t.allDepartments : department}</option>
                    ))}
                  </select>
                </div>
                
                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-arthur-gray mb-2">{t.employmentType}</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    {types.map((type, index) => (
                      <option key={index} value={type}>{type === 'All' ? t.allTypes : type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-arthur-blue">{job.title}</h3>
                        <p className="text-arthur-gray">{job.location} • {job.department} • {job.type}</p>
                      </div>
                      <p className="text-sm text-arthur-gray mt-2 md:mt-0">
                        {t.postedOn} {formatDate(job.postedDate)}
                      </p>
                    </div>
                    
                    <p className="text-arthur-dark mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-arthur-blue mb-2">{t.requirements}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={`/careers/${job.id}`} 
                        className="bg-white border border-arthur-blue text-arthur-blue px-6 py-2 rounded-md hover:bg-arthur-blue hover:text-white transition duration-300 text-center"
                      >
                        {t.viewJob}
                      </Link>
                      <a 
                        href={`https://recruiting.paylocity.com/recruiting/jobs/details/${job.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-arthur-blue text-white px-6 py-2 rounded-md hover:bg-arthur-gold transition duration-300 text-center"
                      >
                        {t.applyNow}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-lg text-arthur-gray">{t.noJobs}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
