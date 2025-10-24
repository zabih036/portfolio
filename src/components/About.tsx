import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe,Computer, Cpu, Shield } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: Globe, description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Net Core, Python, Django' },
    { name: 'ERP Frappe(ERPNext', icon: Computer, description: 'Python, Frappe, Vue.js' },
    { name: 'System Design', icon: Cpu, description: 'Microservices, Cloud Architecture' },
    { name: 'Security', icon: Shield, description: 'Authentication, Authorization, OWASP' },
    { name: 'Code Quality', icon: Code, description: 'Clean Code, Testing, CI/CD' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software developer with a strong foundation in modern web technologies 
            and a drive to create exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a dedicated software developer with expertise in building scalable web applications 
                and mobile solutions. My journey in technology began with a curiosity about how things work, 
                which led me to pursue computer science and software engineering.
              </p>
              <p>
                I have experience working with modern frameworks and technologies, focusing on creating 
                efficient, maintainable, and user-friendly applications. I'm passionate about learning 
                new technologies and staying up-to-date with industry best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Skills & Technologies
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    <skill.icon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
