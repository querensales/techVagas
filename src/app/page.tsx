'use client';
import { useState, useMemo } from 'react';
import Header from './components/Header/header';
import CreateJobModal from './components/JobModal/JobModal';
import FilterSidebar from './components/FilterSideBar/FilterSidebar';
import JobModal from './components/Header/JobModal/JobModal';
import JobList from './components/JobList/JobList';
import SearchBar from './components/SearchBar/SearchBar';
import { Job } from './components/JobCard/JobCard';

const mockJobs: Job[] = [
  { id: 1, 
    title: 'Desenvolvedor(a) Front-end React', 
    company: 'Tech Solutions', 
    location: 'São Paulo, SP', 
    level: 'Pleno', workModel: 'Híbrido', 
    tags: ['React', 'TypeScript', 'TailwindCSS'], 
    area: 'Front-end' 
  },
  {
    id: 2, 
    title: 'Engenheiro(a) de Software Back-end', 
    company: 'Inova Core', 
    location: 'Remoto', 
    level: 'Sênior', 
    workModel: 'Remoto', 
    tags: ['Node.js', 'NestJS', 'PostgreSQL'], 
    area: 'Back-end' 
  },
  { 
    id: 3, 
    title: 'QA (Quality Assurance) Automation', 
    company: 'Future Systems', 
    location: 'Rio de Janeiro, RJ', 
    level: 'Pleno', 
    workModel: 'Presencial', 
    tags: ['Cypress', 'Playwright', 'CI/CD'], 
    area: 'QA' 
  },
  { 
    id: 4, 
    title: 'Desenvolvedor(a) React Native', 
    company: 'Mobile First', 
    location: 'Remoto', 
    level: 'Júnior', 
    workModel: 'Remoto', 
    tags: ['React Native', 'Firebase', 'Expo'], 
    area: 'Mobile' 
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{
    area: string[];
    nivel: string[];
    modelo: string[];
  }>({
    area: [],
    nivel: [],
    modelo: [],
  });

  const handleFilterChange = (category: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prevFilters => {
      const currentFilters = prevFilters[category];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(item => item !== value) 
        : [...currentFilters, value]; 
      return {
        ...prevFilters,
        [category]: newFilters,
      };
    });
  };

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const searchMatch = searchTerm === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
     
      const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(job.area);
      const nivelMatch = selectedFilters.nivel.length === 0 || selectedFilters.nivel.includes(job.level);
      const modeloMatch = selectedFilters.modelo.length === 0 || selectedFilters.modelo.includes(job.workModel);

      return searchMatch && areaMatch && nivelMatch && modeloMatch;
    });
  }, [searchTerm, selectedFilters]);

  const isFiltering = searchTerm !== '' || 
                      selectedFilters.area.length > 0 || 
                      selectedFilters.nivel.length > 0 || 
                      selectedFilters.modelo.length > 0;

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header onAnnounceClick={handleOpenModal} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="gap-8 flex">
          <div className="w-1/4">
            <FilterSidebar 
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="w-3/4 space-y-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h2 className="text-2xl font-bold text-slate-800">
            {isFiltering ? `${filteredJobs.length} vagas encontradas` : 'Vagas em Destaque'}
            </h2>
            <JobList jobs={filteredJobs} />
            <FilterSidebar />
        <JobList />
        <div className="px-4 py-6 sm:px-0">
          <div className=" h-96 flex justify-center items-center">
            <JobList />
          </div>
        </div>
      </main>
      {isModalOpen && <CreateJobModal onClose={handleCloseModal} />}
    </div>
  );
}