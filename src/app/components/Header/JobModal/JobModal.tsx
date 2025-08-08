'use client';
import { useState } from "react";

interface JobModalProps {
    onClose: () => void;
}

export default function JobModal({ onClose }: JobModalProps) {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('Júnior');
    const [workModel, setWorkModel] = useState('Remoto');
    const [description, setDescription] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newJobData = {
            title,
            company,
            location,
            level,
            workModel,
            description,
        };

        console.log('Nova Vaga Submetida:', newJobData);
        alert('Vaga criada com sucesso! (Verifique o console para ver os dados)');
        onClose(); // Fecha o modal após a submissão
    };
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">

            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Anunciar Nova Vaga</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800 text-3xl font-light leading-none">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-slate-700">Título da Vaga</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="Ex: Desenvolvedor(a) React" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-700">Nome da Empresa</label>
                            <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="Ex: Tech Corp" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="level" 
                                className="block text-sm font-medium text-slate-700">
                                Nível
                            </label>
                            <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                <option>Júnior</option>
                                <option>Pleno</option>
                                <option>Sênior</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="workModel"
                                className="block text-sm font-medium text-slate-700">
                                Modelo
                            </label>
                            <select id="workModel" value={workModel} onChange={(e) => setWorkModel(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                                <option>Remoto</option>
                                <option>Híbrido</option>
                                <option>Presencial</option>
                            </select>
                        </div>

                        <div>
                            <label 
                                htmlFor="location" 
                                className="block text-sm font-medium text-slate-700">
                                Localização
                            </label>

                            <input 
                                type="text" 
                                id="location" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" 
                                placeholder="Ex: São Paulo, SP" />
                        </div>
                    </div>

                    <div>
                        <label 
                            htmlFor="description" 
                            className="block text-sm font-medium text-slate-700">
                            Descrição da Vaga
                        </label>

                        <textarea 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            rows={8} 
                            className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" 
                            placeholder="Fale sobre as responsabilidades, requisitos e diferenciais da vaga..." 
                            required> 
                        </textarea>
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-2 px-4 rounded-lg transition-colors">
                            Cancelar
                        </button>

                        <button 
                            type="submit" 
                            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                            Publicar Vaga
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}