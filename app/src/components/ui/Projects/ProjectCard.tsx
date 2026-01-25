interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    url: string;
    stars: number;
    language: string;
    topics: string[];
    lastUpdated: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 truncate">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-600">
            <span>⭐</span>
            <span className="font-semibold">{project.stars}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
            {project.language || 'Vários'}
          </span>
          <span className="text-gray-500 text-sm">
            {project.lastUpdated}
          </span>
        </div>
        
        {project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic} 
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
              >
                {topic}
              </span>
            ))}
            {project.topics.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{project.topics.length - 3}
              </span>
            )}
          </div>
        )}
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
        >
          Ver no GitHub →
        </a>
      </div>
    </div>
  );
}