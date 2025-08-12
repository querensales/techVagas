import React from 'react';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  level: 'Júnior' | 'Pleno' | 'Sênior';
  workModel: 'Remoto' | 'Híbrido' | 'Presencial';
  tags: string[];
  area: string;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const levelColorMap = {
    'Júnior': 'bg-green-100 text-green-800',
    'Pleno': 'bg-blue-100 text-blue-800',
    'Sênior': 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200 flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
        <p className="text-md text-slate-600 mt-1">{job.company}</p>
        <div className="text-sm text-slate-500 mt-4 flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {job.workModel}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
        <div className="flex flex-wrap gap-2 items-center">
           <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${levelColorMap[job.level]}`}>
            {job.level}
          </span>
          {job.tags.map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
          Ver Detalhes
        </a>
      </div>
    </div>
  );
};