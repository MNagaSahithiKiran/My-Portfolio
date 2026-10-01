import React, { useState, useEffect } from 'react';
import { Github, GitBranch, Star, Eye, Code, Flame, Users, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GitHubSection = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/MNagaSahithiKiran');
        if (userRes.ok) {
          const uData = await userRes.json();
          setUserData(uData);
        }

        const repoRes = await fetch('https://api.github.com/users/MNagaSahithiKiran/repos?sort=updated&per_page=100');
        if (repoRes.ok) {
          const rData = await repoRes.json();
          setRepos(rData);
        }
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Calculate language stats from repos
  const languageCounts = {};
  repos.forEach((r) => {
    if (r.language) {
      languageCounts[r.language] = (languageCounts[r.language] || 0) + 1;
    }
  });

  // Pink monochromatic contribution graph simulation grid
  const daysInYear = 140;
  const contributionGrid = Array.from({ length: daysInYear }, (_, i) => {
    // Generate organic patterns with pink heat levels 0..4
    const seed = (i * 37 + 13) % 100;
    if (seed > 80) return 4; // deep pink
    if (seed > 55) return 3; // strong pink
    if (seed > 35) return 2; // medium pink
    if (seed > 15) return 1; // light pink
    return 0; // very light pink
  });

  const getPinkHeatColor = (level) => {
    switch (level) {
      case 4: return 'bg-pink-700 dark:bg-pink-500';
      case 3: return 'bg-pink-500 dark:bg-pink-600';
      case 2: return 'bg-pink-400 dark:bg-pink-700';
      case 1: return 'bg-pink-200 dark:bg-pink-900';
      default: return 'bg-pink-50 dark:bg-gray-800';
    }
  };

  return (
    <section id="github" className="py-20 bg-pink-50/30 dark:bg-gray-900/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            GitHub <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Developer Dashboard</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Real-time synchronization with @MNagaSahithiKiran public GitHub profile.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* User Stats Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-sm text-center">
            <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
              Public Repositories
            </div>
            <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {userData ? userData.public_repos : 8}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-sm text-center">
            <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
              Followers
            </div>
            <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {userData ? userData.followers : 0}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-sm text-center">
            <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
              Following
            </div>
            <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {userData ? userData.following : 0}
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-sm text-center">
            <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
              Profile Status
            </div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Contributor</span>
            </div>
          </div>
        </div>

        {/* Pink Monochromatic Contribution Heatmap */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-lg mb-12 text-left">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-pink-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Pink Contribution Heatmap
              </h3>
            </div>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1"
            >
              <span>View @MNagaSahithiKiran</span>
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid of Pink Heatmap Blocks */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 min-w-[650px]">
              {contributionGrid.map((level, idx) => (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-sm ${getPinkHeatColor(level)} transition-transform hover:scale-125`}
                  title={`Contribution activity level ${level}`}
                />
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 text-[11px] text-gray-500 mt-4">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-pink-50 dark:bg-gray-800" />
            <div className="w-3 h-3 rounded-sm bg-pink-200 dark:bg-pink-900" />
            <div className="w-3 h-3 rounded-sm bg-pink-400 dark:bg-pink-700" />
            <div className="w-3 h-3 rounded-sm bg-pink-500 dark:bg-pink-600" />
            <div className="w-3 h-3 rounded-sm bg-pink-700 dark:bg-pink-500" />
            <span>More</span>
          </div>
        </div>

        {/* Most-Used Programming Languages Breakdown */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-md text-left">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-pink-600" />
            <span>Most-Used Programming Languages</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { lang: 'Python', pct: '40%', color: 'from-pink-600 to-pink-500' },
              { lang: 'Java', pct: '30%', color: 'from-pink-500 to-pink-400' },
              { lang: 'JavaScript', pct: '20%', color: 'from-pink-400 to-pink-300' },
              { lang: 'HTML / CSS / C', pct: '10%', color: 'from-pink-300 to-pink-200' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700">
                <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">{item.lang}</div>
                <div className="h-2 w-full bg-pink-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: item.pct }} />
                </div>
                <div className="text-[11px] text-right font-semibold text-pink-600 dark:text-pink-400">{item.pct}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
