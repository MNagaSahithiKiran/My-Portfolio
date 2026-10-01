import React, { useState, useEffect } from 'react';
import { FolderGit2, Github, ExternalLink, Star, Code2, CheckCircle2, RefreshCw } from 'lucide-react';
import { publicProjects } from '../data/portfolioData';

const categories = ['All', 'Featured', 'AI/ML', 'Full-Stack', 'Web', 'Core CS'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projectsList, setProjectsList] = useState(publicProjects);
  const [isLiveSyncing, setIsLiveSyncing] = useState(false);

  // Live Sync with GitHub API for real-time repo detection
  useEffect(() => {
    const fetchLiveRepos = async () => {
      setIsLiveSyncing(true);
      try {
        const response = await fetch('https://api.github.com/users/MNagaSahithiKiran/repos?sort=updated&per_page=100');
        if (response.ok) {
          const apiRepos = await response.json();
          
          // Map API repos into project format, enriching with static curated details
          const mergedProjects = apiRepos.map((apiRepo) => {
            const staticMatch = publicProjects.find(
              (p) => p.repoName.toLowerCase() === apiRepo.name.toLowerCase()
            );

            if (staticMatch) {
              return {
                ...staticMatch,
                stargazers_count: apiRepo.stargazers_count,
                pushed_at: apiRepo.pushed_at,
                language: apiRepo.language || staticMatch.technologies[0],
              };
            }

            // Fallback for any newly created repository on GitHub
            return {
              id: apiRepo.name,
              title: apiRepo.name.replace(/-/g, ' '),
              repoName: apiRepo.name,
              description: apiRepo.description || 'Public GitHub repository by Meesaragandla Naga Sahithi Kiran.',
              problemSolved: 'Practical software implementation developed in GitHub repository.',
              features: [
                'Source code published on GitHub',
                `Primary language: ${apiRepo.language || 'Code'}`,
                'Version controlled repository'
              ],
              technologies: [apiRepo.language || 'Code', 'GitHub'],
              githubUrl: apiRepo.html_url,
              category: apiRepo.language === 'Python' ? 'AI/ML' : 'Web',
              featured: false,
              stargazers_count: apiRepo.stargazers_count
            };
          });

          if (mergedProjects.length > 0) {
            setProjectsList(mergedProjects);
          }
        }
      } catch (err) {
        console.error('Error fetching live GitHub projects:', err);
      } finally {
        setIsLiveSyncing(false);
      }
    };

    fetchLiveRepos();
  }, []);

  const filteredProjects = projectsList.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Liquid Glow */}
      <div className="apple-glow-pink w-[500px] h-[500px] top-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>GitHub Repository Showcase ({projectsList.length} Repositories)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            All <span className="gradient-text-apple">Public Projects</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Live synchronized repositories built by Meesaragandla Naga Sahithi Kiran on GitHub.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Category Filters - Segmented Apple Glass Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105 border border-white/30'
                  : 'apple-glass-pill text-gray-800 dark:text-gray-200 hover:text-pink-600 hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id || project.repoName}
              className="apple-glass apple-glass-hover p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white text-[10px] font-extrabold flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-white" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors tracking-tight">
                  {project.title}
                </h3>

                <div className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-4 bg-white/80 dark:bg-gray-900/80 px-3.5 py-1.5 rounded-xl w-fit border border-pink-100 dark:border-gray-800 flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-pink-500" />
                  <span>MNagaSahithiKiran/{project.repoName}</span>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-normal">
                  {project.description}
                </p>

                {/* Problem Solved Highlight */}
                {project.problemSolved && (
                  <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-pink-100 dark:border-gray-800 mb-4">
                    <span className="text-[11px] font-bold text-pink-600 dark:text-pink-400 uppercase block mb-1">
                      Problem Solved:
                    </span>
                    <span className="text-xs text-gray-800 dark:text-gray-200">
                      {project.problemSolved}
                    </span>
                  </div>
                )}

                {/* Key Features */}
                {project.features && (
                  <div className="space-y-1.5 mb-6">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full apple-glass-pill text-[11px] font-bold text-gray-800 dark:text-pink-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-pink-100 dark:border-gray-800 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white text-xs font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-pink-400" />
                  <span>View Repository</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full apple-glass-pill text-pink-600 hover:scale-110 transition-transform"
                  title="Open on GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
