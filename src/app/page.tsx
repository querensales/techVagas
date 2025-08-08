"use client";
import { useState } from 'react';
import Header from './components/Header/header';
import JobModal from './components/JobModal/JobModal';


export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* O Header recebe a função para abrir o modal como prop */}
      <Header onAnnounceClick={handleOpenModal} />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Aqui você adicionará o conteúdo principal, como a lista de vagas */}
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center">
            <p className="text-slate-500">O feed de vagas aparecerá aqui.</p>
          </div>
        </div>
      </main>
      {isModalOpen && <JobModal onClose={handleCloseModal} />}
    </div>
  );
}
