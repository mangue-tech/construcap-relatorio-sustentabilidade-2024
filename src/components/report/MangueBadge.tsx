import mangueLogo from "@/assets/mangue-tech-badge.png";

const MangueBadge = () => {
  return (
    <div className="flex justify-end mt-8 mb-4 pr-6">
      <a 
        href="https://mangue.tech" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="transition-all duration-300 hover:scale-105 hover:opacity-90" 
        aria-label="Desenvolvido por Mangue Tech"
      >
        <img 
          alt="Desenvolvido por Mangue Tech" 
          src={mangueLogo} 
          className="h-10 w-auto rounded-lg shadow-2xl" 
        />
      </a>
    </div>
  );
};

export default MangueBadge;