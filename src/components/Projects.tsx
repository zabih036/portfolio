// import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  // const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Book store',
      description: 'online book store with modern UI .',
      longDescription: 'A comprehensive platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and admin dashboard.',
      image: './images/book.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/zabih036/react-books-store.git',
      liveUrl: 'https://github.com/zabih036/react-books-store.git',
      category: 'web',
      featured: true,
    },
    {
      id: 2,
      title: 'Milad Steel Mill',
      description: 'Milad steel mill production app manages daily production and accounting of company.',
      longDescription: 'A modern production management application with real-time collaboration features, and accounting management capabilities.',
      image: './images/milad.png',
      technologies: ['.Net Core', 'JQuery', 'Bootstrap', 'SQL Server'],
      githubUrl: 'https://github.com/zabih036/ZiaSaeediDb.git',
      liveUrl: 'https://github.com/zabih036/ZiaSaeediDb.git',
      category: 'web',
      featured: true,
    },
      {
      id: 3,
      title: 'Accounting App',
      description: 'A modern accounting system for managing finances, assets, and transactions efficiently.',
      longDescription: 'A comprehensive accounting application designed for businesses to manage financial records, track income and expenses, handle journal entries, and generate real-time financial reports. Built with scalability, accuracy, and security in mind.',
      image: './images/accounting.png', // Replace with actual image URL or path
      technologies: ['.NET Core', 'SQL Server', 'Bootstrap', 'jQuery', 'DataTables'],
      githubUrl: 'https://github.com/zabihullahhamdard/accounting-app',
      liveUrl: 'https://accounting-app-demo.com', // Optional if not hosted
      category: 'web',
      featured: true,
    },
        {
      id: 4,
      title: 'Etimad Steel Mill Production System',
      description: 'Comprehensive production management system for steel manufacturing and operations.',
      longDescription: 'An integrated ERP solution developed for Etimad Steel Mill to manage the full production lifecycle — from raw material intake to finished goods. The system includes modules for production tracking, quality control, maintenance scheduling, and analytics for operational efficiency.',
      image: './images/etimad.png', // Replace with actual project image path
      technologies: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'Bootstrap'],
      githubUrl: 'https://github.com/zabih036/etimad-steelmill',
      liveUrl: 'https://etimad-steelmill-demo.com', // Optional if hosted locally
      category: 'web',
      featured: true,
    },

   {
  id: 5,
  title: 'Almadina Store Management System',
  description: 'Retail management system for clothing and footwear sales.',
  longDescription: 'A complete store management application designed for Almadina Store to handle product inventory, sales, and customer billing for clothing and shoes. It includes stock tracking, category-wise item listings, barcode support, and sales reporting to improve retail efficiency.',
  image: './images/almadina.jpg', // Replace with actual image path, e.g., '/assets/images/almadina-store.jpg'
  technologies: ['.NET Core', 'SQL Server', 'Bootstrap', 'jQuery', 'DataTables'],
  githubUrl: 'https://github.com/zabihullahhamdard/almadina-store',
  liveUrl: 'https://almadina-store-demo.com',
  category: 'web',
  featured: false,
},

   {
  id: 6,
  title: 'Mirbat Zada Shampoo Production System',
  description: 'A production and inventory management system for Mirbat Zada Shampoo Company.',
  longDescription: 'A custom web application built for Mirbat Zada Shampoo Production Company to manage daily production, raw material usage, product packaging, and stock tracking. The system helps monitor batch outputs, quality control data, and sales dispatch records to streamline manufacturing operations.',
  image: './images/mirbat.jpg', // Replace with actual image path, e.g., '/assets/images/mirbat-zada.jpg'
  technologies: ['.NET Core', 'SQL Server', 'Bootstrap', 'jQuery', 'DataTables'],
  githubUrl: 'https://github.com/zabihullahhamdard/mirbat-zada-production',
  liveUrl: 'https://mirbat-zada-demo.com',
  category: 'web',
  featured: true,
}

  ];

  // const categories = [
  //   { id: 'all', name: 'All Projects' },
  //   { id: 'web', name: 'Web Applications' },
  //   { id: 'mobile', name: 'Mobile Apps' },
  // ];

  const filteredProjects = projects //selectedCategory === 'all' 
    // ? projects 
    // : projects.filter(project => project.category === selectedCategory);

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category.name}
            </button>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              {/* <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div> */}

<div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden rounded-t-2xl">
  {/* Project Image */}
  {project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  )}

  {/* Overlay for readability (optional) */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Title initial in background */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-6xl font-bold text-white opacity-20">
      {project.title.charAt(0)}
    </span>
  </div>

  {/* Featured badge */}
  {project.featured && (
    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
      Featured
    </div>
  )}
</div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/zabih036"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
