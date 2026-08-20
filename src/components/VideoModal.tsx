import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  projectTitle: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, projectTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Header del Modal */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="text-lg font-semibold text-white">Demo: {projectTitle}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Contenedor del Video */}
        <div className="relative pt-[56.25%] w-full bg-black">
          {/* Aquí puedes usar un tag <video> nativo o un iframe dependiendo de dónde alojes el video */}
          <iframe 
            src={videoUrl} 
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            title={`Demo de ${projectTitle}`}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;