import React from "react";

const FilterSections = [
    {
        title: "Área",
        options: [
            { value: "front-end", label: "Front-end" },
            { value: "back-end", label: "Back-end" },
            { value: "full-stack", label: "Full-stack" },
            { value: "QA", label: "QA (Quality Assurance)" },
            { value: "devops", label: "DevOps" },
            { value: "mobile", label: "Mobile" },
        ],
    },
    {
        title: "Nível",
        options: [
            { value: "junior", label: "Júnior" },
            { value: "pleno", label: "Pleno" },
            { value: "senior", label: "Sênior" },
        ],
    },
    {
        title: "Modelo de Trabalho",
        options: [
            { value: "presencial", label: "Presencial" },
            { value: "remoto", label: "Remoto" },
            { value: "hibrido", label: "Híbrido" },
        ],
    },
];


export default function FilterSidebar(){
    return(
        <div className=" p-6 ">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Filtros</h2>
            {FilterSections.map((section) => (
                <div key={section.title} className="mb-6">
                    <h3 className="font-semibold text-slate-700 mb-2">{section.title}</h3>
                    <div className="space-y-2">
                        {section.options.map((option) => (
                            <div key={option.value} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                />
                                <label htmlFor={option.value} className="ml-2 block text-sm text-slate-700">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
       

    )
}