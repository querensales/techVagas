'use client';

import React, { useState, useMemo } from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function JobList() {
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
