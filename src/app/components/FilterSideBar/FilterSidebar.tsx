// components/FilterSideBar/FilterSidebar.tsx
'use client';

import React from 'react';

// O "mapa" dos nossos filtros permanece o mesmo.
const filterSections = [
  {
    id: 'area', // Usaremos 'id' para a lógica
    title: 'Área',
    options: ['Front-end', 'Back-end', 'Full-stack', 'QA', 'DevOps', 'Mobile'],
  },
  {
    id: 'nivel',
    title: 'Nível',
    options: ['Júnior', 'Pleno', 'Sênior'],
  },
  {
    id: 'modelo',
    title: 'Modelo de Trabalho',
    options: ['Remoto', 'Híbrido', 'Presencial'],
  },
];

// CORREÇÃO 1: Definimos a "forma" das props que o componente vai receber.
interface FilterSidebarProps {
  selectedFilters: {
    area: string[];
    nivel: string[];
    modelo: string[];
  };
  onFilterChange: (category: 'area' | 'nivel' | 'modelo', value: string) => void;
}

// CORREÇÃO 2: O componente agora aceita as props.
export default function FilterSidebar({ selectedFilters, onFilterChange }: FilterSidebarProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-bold text-slate-800">Filtros</h2>

      {filterSections.map((section) => (
        <div key={section.id}>
          <h3 className="font-semibold text-slate-700 mb-2">{section.title}</h3>
          
          <div className="space-y-2">
            {section.options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  id={option}
                  name={option}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  // CORREÇÃO 3: O checkbox agora chama a função onFilterChange quando clicado.
                  onChange={() => onFilterChange(section.id as 'area' | 'nivel' | 'modelo', option)}
                  // CORREÇÃO 4: O estado 'checked' é controlado pelo estado do componente pai.
                  checked={selectedFilters[section.id as 'area' | 'nivel' | 'modelo'].includes(option)}
                />
                <label htmlFor={option} className="ml-2 text-sm text-slate-600">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
