'use client'
import { JSX } from "react";

   interface HeaderProps {
        onAnnounceClick: () => void; // Define que o componente espera uma função
    }

export default function HeaderComponent({ onAnnounceClick }: HeaderProps): JSX.Element {
 
    return (

        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-800">
                    Tech Vagas
                </h1>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    onClick={onAnnounceClick} >
                    Anunciar Vaga
                </button>
            </div>
        </header>
    )
}