"use client"; // Necessário para usar handlers de evento como onClick

import HeaderComponent from "./components/Header-component/headerComponent";

export default function Home() {
  const handleAnnounceClick = () => {
    console.log("Botão 'Anunciar Vaga' clicado!");
  };

  return (
   <HeaderComponent onAnnounceClick={handleAnnounceClick} />
  );
}
