"use client";
import { useState } from 'react';
import Header from './components/Header/header';
import JobModal from './components/JobModal/JobModal';
import FilterSidebar from './components/FilterSideBar/FilterSidebar';
import JobList from './components/JobList/JobList';

const mockJobs: Job[] = [
  { id: 1, title: 'Desenvolvedor(a) Front-end React', company: 'Tech Solutions', location: 'São Paulo, SP', level: 'Pleno', workModel: 'Híbrido', tags: ['React', 'TypeScript', 'TailwindCSS'], area: 'Front-end' },
  { id: 2, title: 'Engenheiro(a) de Software Back-end', company: 'Inova Core', location: 'Remoto', level: 'Sênior', workModel: 'Remoto', tags: ['Node.js', 'NestJS', 'PostgreSQL'], area: 'Back-end' },
  { id: 3, title: 'QA (Quality Assurance) Automation', company: 'Future Systems', location: 'Rio de Janeiro, RJ', level: 'Pleno', workModel: 'Presencial', tags: ['Cypress', 'Playwright', 'CI/CD'], area: 'QA' },
  { id: 4, title: 'Desenvolvedor(a) React Native', company: 'Mobile First', location: 'Remoto', level: 'Júnior', workModel: 'Remoto', tags: ['React Native', 'Firebase', 'Expo'], area: 'Mobile' },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

    const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [] as string[],
    nivel: [] as string[],
    modelo: [] as string[],
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header onAnnounceClick={handleOpenModal} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="gap-8 flex">
          <div className="w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-3/4"><JobList /></div>
        </div>

      </main>
      {isModalOpen && <JobModal onClose={handleCloseModal} />}
    </div>
  );
}
