import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Trophy, Star, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const Experience = () => {
  const experience = [
    {
      role: "Android Application Development Trainee",
      organization: "Civic Eye Project",
      date: "Jun 2025 – Jul 2025",
      url: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12315700_840_20_08_2025.pdf?_gl=1%2A1j5ov8i%2A_gcl_au%2AMTY5NDY2NjkwNy4xNzU5MjIyNzIx%2A_ga%2AMTI5NzM3Njg2NS4xNzQ4NTk1NTUx%2A_ga_WKLQCVXZ47%2AczE3NjQyODE1NzAkbzgkZzEkdDE3NjQyODE1OTckajMzJGwwJGgw",
      details: [
        "Worked as an Android App Developer and developed a mobile application named Civic Eye.",
        "Gained hands-on experience on XML and Kotlin languages for both UI and UX.",
        "Integrated Firebase with android project on Android Studio platform."
      ]
    }
  ];

  const education = [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology - CSE",
      date: "Aug 2023 - Present",
      score: "CGPA: 6.3"
    },
    {
      school: "Sant Atulanand Convent School",
      degree: "Intermediate",
      date: "Apr 2021 – Mar 2022",
      score: "Percentage: 68.6%"
    },
    {
      school: "Sant Atulanand Convent School",
      degree: "Matriculation",
      date: "Apr 2019 – Mar 2020",
      score: "Percentage: 90.6%"
    }
  ];

  const certificates = [
    { name: "JavaScript by Codewithrandom.dev", date: "Sep 24", url: "https://drive.google.com/file/d/1bf_CFIsWp1qYOI2Mn9uT13_JS3_caW9G/view" },
    { name: "Introduction to Cloud Computing by IIT Kharagpur", date: "Jan – Apr 25", url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S153730233904247387" },
    { name: "CSS3 by Infosys", date: "Jun 25", url: "https://drive.google.com/file/d/1fqvJzk5g-nuR3FXQvdfuZnjxeomv5H7f/view" },
    { name: "Master Generative AI & Tools by Infosys", date: "Aug 25", url: "https://drive.google.com/file/d/1uwgEMfhmVhPlxe3wM8kc2kEBid0TvvKd/view" },
    { name: "Data Analytics Simulation by Deloitte", date: "Sep 25", url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_EnxN5kr8mW4cHeeq4_1759254931337_completion_certificate.pdf" },
    { name: "Data Visualization by Tata", date: "Sep 25", url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_EnxN5kr8mW4cHeeq4_1759254035313_completion_certificate.pdf" }
  ];

  const achievements = [
    { title: "Finalist in HACKHAZARDS 2025", date: "Apr 25", icon: <Trophy size={18} />, color: "text-emerald-400", borderColor: "border-emerald-500/30", bgColor: "bg-emerald-500/5", url: "https://verification.givemycertificate.com/v/6ea2efb6-2176-4a05-8605-62ba18a605f8" },
    { title: "2-star rating & Bronze Badge in SQL", date: "HackerRank | Jul 24", icon: <Star size={18} />, color: "text-amber-400", borderColor: "border-amber-500/30", bgColor: "bg-amber-500/5", url: "https://www.hackerrank.com/profile/rajputgarv2303" },
    { title: "3-star rating & Silver Badge in Python", date: "HackerRank | Sep 25", icon: <Star size={18} />, color: "text-gray-300", borderColor: "border-gray-400/30", bgColor: "bg-gray-400/5", url: "https://www.hackerrank.com/profile/rajputgarv2303" },
  ];

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="experience" className="py-24 relative text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-neon text-sm tracking-widest uppercase">
            {'// my journey'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-3 tracking-tight">
            Experience & <span className="neon-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column — Experience & Education */}
          <div>
            {/* Experience */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold font-mono">experience()</h3>
            </motion.div>

            <div className="space-y-8 border-l border-primary/20 pl-8 ml-4 relative">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <motion.span
                    className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-dark border-[3px] border-primary"
                    style={{ boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}
                    variants={timelineDotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <TiltCard className="cyber-card p-5 rounded-xl group" intensity={8}>
                    <a href={exp.url} target="_blank" rel="noreferrer" className="relative z-10 block cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</h4>
                          <p className="text-primary text-xs font-mono mb-3">{exp.organization} <span className="text-gray-600">|</span> {exp.date}</p>
                        </div>
                        <ExternalLink size={14} className="text-gray-600 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                      </div>
                      <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-400 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-primary mt-1.5 text-[8px]">▸</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </a>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              className="flex items-center gap-3 mb-8 mt-14"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold font-mono">education()</h3>
            </motion.div>

            <div className="space-y-8 border-l border-accent/20 pl-8 ml-4 relative">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <motion.span
                    className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-dark border-[3px] border-accent"
                    style={{ boxShadow: '0 0 15px rgba(255, 45, 155, 0.5)' }}
                    variants={timelineDotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <TiltCard className="cyber-card p-5 rounded-xl" intensity={8}>
                    <div className="relative z-10">
                      <h4 className="text-base font-bold">{edu.school}</h4>
                      <p className="text-accent text-xs font-mono mb-1">{edu.degree}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                        <span>{edu.date}</span>
                        <span className="text-white font-semibold bg-white/5 px-2 py-0.5 rounded">{edu.score}</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Certificates & Achievements */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold font-mono">certifications()</h3>
            </motion.div>

            <div className="space-y-3">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-card p-4 rounded-xl flex justify-between items-center gap-4 group cursor-pointer hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary/30 font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{cert.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-600 whitespace-nowrap">{cert.date}</span>
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Achievements */}
            <motion.div
              className="mt-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold font-mono mb-6 flex items-center gap-2">
                <span className="text-yellow-400">★</span> achievements()
              </h3>
              <div className="space-y-4">
                {achievements.map((ach, index) => (
                  <a key={index} href={ach.url} target="_blank" rel="noreferrer" className="block">
                    <TiltCard className={`cyber-card p-4 rounded-xl border ${ach.borderColor} group cursor-pointer hover:border-opacity-60 transition-all`} intensity={6}>
                      <div className="relative z-10 flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${ach.bgColor} ${ach.color}`}>
                          {ach.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-sm text-white group-hover:text-primary transition-colors">{ach.title}</h4>
                          <span className="text-xs font-mono text-gray-600">{ach.date}</span>
                        </div>
                        <ExternalLink size={14} className="text-gray-600 group-hover:text-primary transition-colors mt-1" />
                      </div>
                    </TiltCard>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
