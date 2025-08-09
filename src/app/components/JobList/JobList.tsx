'use client';

import React, { useState, useMemo } from 'react';
import JobCard, {Job} from '../JobCard/JobCard';
import SearchBar from '../SearchBar/SearchBar';

// Dados de exemplo (mock data).
const mockJobs: Job[] = [
  { id: 1, title: 'Desenvolvedor(a) Front-end React', company: 'Tech Solutions', location: 'São Paulo, SP', level: 'Pleno', workModel: 'Híbrido', tags: ['React', 'TypeScript', 'TailwindCSS'] },
  { id: 2, title: 'Engenheiro(a) de Software Back-end', company: 'Inova Core', location: 'Remoto', level: 'Sênior', workModel: 'Remoto', tags: ['Node.js', 'NestJS', 'PostgreSQL'] },
  { id: 3, title: 'QA (Quality Assurance) Automation', company: 'Future Systems', location: 'Rio de Janeiro, RJ', level: 'Pleno', workModel: 'Presencial', tags: ['Cypress', 'Playwright', 'CI/CD'] },
  { id: 4, title: 'Desenvolvedor(a) React Native', company: 'Mobile First', location: 'Remoto', level: 'Júnior', workModel: 'Remoto', tags: ['React Native', 'Firebase', 'Expo'] },
];

export default function JobList() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredJobs = useMemo(() => {
    if (!searchTerm) {return mockJobs}

    return mockJobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]); 

  return (
    <div className="space-y-6 mt-8">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2 className="text-2xl font-bold text-slate-800 pt-4">
        {searchTerm ? `${filteredJobs.length} vagas encontradas` : 'Vagas em Destaque'}
      </h2>
      {filteredJobs.length > 0 ? (
        <div className="grid gap-6">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-slate-500">Nenhuma vaga encontrada para sua busca.</p>
        </div>
      )}
    </div>
  );
};
