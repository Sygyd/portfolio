"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectData } from "@/types/i18n";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Terminal } from "lucide-react";

export function ProjectsSection() {
  const { dict } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>{dict.projects.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text">
            {dict.projects.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {dict.projects.sectionDesc}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dict.projects.items.map((project) => (
            <SpotlightCard
              key={project.id}
              className="flex flex-col justify-between h-full group cursor-pointer hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-6">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {project.heroBadge}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-dim group-hover:text-primary group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-text-dim">
                    {project.category}
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3 pt-1">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-surface-raised border border-border">
                  {project.stats.map((st, sIdx) => (
                    <div key={sIdx} className="text-left">
                      <div className="text-base font-mono font-bold text-primary">
                        {st.value}
                      </div>
                      <div className="text-[10px] text-text-dim font-medium line-clamp-1">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-border/80 text-text-dim"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-border text-primary">
                      +{project.stack.length - 4} más
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 border-t border-border/70 flex items-center justify-between text-xs font-mono">
                <span className="text-text-dim flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  <span>Deep-Dive Arquitectónico</span>
                </span>
                <span className="text-primary font-semibold flex items-center gap-1 group-hover:underline">
                  <span>{dict.common.viewProject}</span>
                  <span>→</span>
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Modal with detailed specs */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
