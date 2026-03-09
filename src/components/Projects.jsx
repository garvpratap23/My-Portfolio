import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
  const projects = [
    {
      title: "AI-Nutritionist",
      date: "Feb 2025 – Mar 2025",
      description: "An AI-powered nutrition recommendation system integrating front-end form processing, dynamic validation, and personalized user input handling. Features a real-time chat interface with an AI assistant.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Gemini API", "MySQL"],
      github: "https://github.com/garvpratap23",
      gradient: "from-cyan-500 to-blue-600",
      accentColor: "#00d4ff",
      number: "01",
    },
    {
      title: "CitizenGPT",
      date: "Apr 2025 – May 2025",
      description: "A citizen service chatbot integrating the Gemini AI API with a TailwindCSS-based frontend. Implemented authentication, interactive UI, and scalable multi-page architecture.",
      tech: ["HTML", "TailwindCSS", "JavaScript", "Gemini API"],
      github: "https://github.com/garvpratap23",
      gradient: "from-purple-500 to-violet-600",
      accentColor: "#7b2ff7",
      number: "02",
    },
    {
      title: "Civic Eye",
      date: "Jun 2025 – Jul 2025",
      description: "Mobile application to report issues related to civic sense and help find lost and found items. Integration with Firebase for backend services.",
      tech: ["XML", "Kotlin", "Firebase", "Android Studio"],
      github: "https://github.com/garvpratap23/CivicEye",
      gradient: "from-pink-500 to-rose-600",
      accentColor: "#ff2d9b",
      number: "03",
    },
    {
      title: "NewsHub",
      date: "Aug 2025 – Sep 2025",
      description: "A real-time news aggregation web application that fetches and displays the latest headlines across multiple categories. Features a clean, responsive UI with search functionality, category filtering, and dynamic content loading for a seamless news browsing experience.",
      tech: ["React", "JavaScript", "CSS", "News API"],
      github: "https://github.com/garvpratap23/NewsHub",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "#ff8c00",
      number: "04",
    },
    {
      title: "DataInsight",
      date: "Oct 2025 – Nov 2025",
      description: "A full-stack MERN web application that allows users to upload CSV/Excel files for automated data cleaning and exploratory data analysis (EDA). Processes datasets in real time, generates statistical summaries and visual insights, and presents interactive results through a responsive UI for efficient data understanding.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/garvpratap23/Dataset-Analyser",
      gradient: "from-emerald-500 to-teal-600",
      accentColor: "#10b981",
      number: "05",
    }
  ];

  return (
    <section id="projects" className="py-24 relative text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            {'// my work'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-3 tracking-tight">
            Selected <span className="neon-text-alt">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="cyber-card rounded-2xl h-full group" intensity={12}>
                {/* Top gradient accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

                {/* Project number watermark */}
                <div
                  className="absolute top-6 right-6 text-7xl font-black opacity-[0.03] font-mono select-none"
                  style={{ color: project.accentColor }}
                >
                  {project.number}
                </div>

                <div className="p-7 h-full flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3
                        className="text-2xl font-bold transition-all duration-500 group-hover:drop-shadow-[0_0_12px_var(--tw-shadow-color)]"
                        style={{ '--tw-shadow-color': project.accentColor }}
                      >
                        <span className="group-hover:neon-text transition-all duration-300">{project.title}</span>
                      </h3>
                      <span className="text-xs font-mono text-gray-600 mt-1 block tracking-wider">{project.date}</span>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>

                  <p className="text-gray-500 mb-6 flex-grow leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-gray-500 border border-white/5 pill-glow"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
