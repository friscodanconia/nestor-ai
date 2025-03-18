import React from 'react';
import { Github } from 'lucide-react';
import CategoryLayout from '../components/CategoryLayout';
import SEO from '../components/SEO';
import { githubReposData } from '../data/categories/githubRepos';
import { Text, Card } from '../components/ui';

const GithubRepos = () => {
  // Mobile content
  const mobileContent = (
    <>
      <SEO 
        title="GitHub Repos"
        description={githubReposData.description}
        keywords="GitHub repositories, AI repos, machine learning code, open source AI, developer resources"
      />
      
      <div className="space-y-6">
        <Text variant="h3" className="mb-4">{githubReposData.title}</Text>
        <Text variant="body" color="secondary" className="mb-6">
          {githubReposData.overview}
        </Text>
        <Card variant="outlined">
          <ul className="space-y-3 p-4">
            {githubReposData.repos.map((repo, index) => (
              <li key={index} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex flex-col">
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    {repo.name}
                  </a>
                  <Text variant="body-sm" color="secondary">
                    {repo.description}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );

  // Desktop content (same as mobile for now)
  const desktopContent = mobileContent;

  return (
    <CategoryLayout
      title={githubReposData.title}
      icon={<Github className="w-6 h-6" />}
      gradientClasses={githubReposData.gradientClasses}
      description={githubReposData.description}
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      breadcrumbParent="/"
    />
  );
};

export default GithubRepos;