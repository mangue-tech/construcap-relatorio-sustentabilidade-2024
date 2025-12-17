import mangueLogo from "@/assets/mangue-tech-badge.png";

const MangueBadge = () => {
  return (
    <a
      href="https://mangue.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition-all duration-300 hover:scale-105 hover:opacity-90"
      aria-label="Desenvolvido por Mangue Tech"
    >
      <img 
        src={mangueLogo} 
        alt="Desenvolvido por Mangue Tech" 
        className="h-10 w-auto rounded-lg shadow-lg"
      />
    </a>
  );
};

export default MangueBadge;
