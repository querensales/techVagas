'use client';

import React from 'react';
import JobCard, { Job } from '../JobCard/JobCard';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <> 
      {jobs.length > 0 ? (
        <div className="flex flex-col gap-6">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-lg shadow-md">
          <p className="text-slate-500">Nenhuma vaga encontrada para sua busca.</p>
        </div>
      )}
    </>
  );
};
