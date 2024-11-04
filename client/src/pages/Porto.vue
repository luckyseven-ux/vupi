<template>
    <div class="bg-gray-900 min-h-screen text-white flex flex-col items-center">
      <header class="w-full py-6 bg-gray-800 shadow-md">
        <nav class="container mx-auto flex justify-between items-center">
          <h1 class="text-3xl font-bold">My Portfolio</h1>
          <ul class="flex space-x-6">
            <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-gray-400">Projects</router-link></li>
            <li><router-link to="/contact" class="hover:text-gray-400">Contact</router-link></li>
          </ul>
        </nav>
      </header>
  
      <main class="container mx-auto px-4 py-16">
        <section class="text-center mb-12">
          <h2 class="text-4xl font-extrabold mb-4">Hello, I'm [Your Name]</h2>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer who loves building amazing projects. Here are some of my works.
          </p>
        </section>
  
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="p-6 border border-gray-700 rounded-lg shadow-md hover:shadow-xl transform transition hover:-translate-y-1">
            <img :src="project.image" alt="Project Thumbnail" class="w-full h-40 object-cover rounded-md mb-4">
            <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-sm text-gray-300 mb-4">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="text-indigo-400 hover:underline">View Project</a>
          </div>
        </section>
      </main>
  
      <footer class="w-full py-4 bg-gray-800 text-center">
        <p class="text-gray-400">&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  
  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'A web app built with Vue and Tailwind CSS.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A mobile app designed for seamless user experience.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'An e-commerce platform with advanced features.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    // Tambahkan lebih banyak proyek sesuai kebutuhan
  ];
  </script>
  
  <style scoped>
  /* Tambahkan style khusus jika diperlukan */
  </style>
  