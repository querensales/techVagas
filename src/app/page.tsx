"use client";
import { useState } from 'react';
import Header from './components/Header/header';
import JobModal from './components/Header/JobModal/JobModal';
import JobList from './components/JobList/JobList'; 


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
      <Header onAnnounceClick={handleOpenModal} />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className=" h-96 flex justify-center items-center">
            <JobList />
          </div>
        </div>
      </main>
      {isModalOpen && <JobModal onClose={handleCloseModal} />}
    </div>
  );
}
