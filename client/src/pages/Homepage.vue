<template>
    <div class="bg-gradient-to-r from-indigo-600 to-purple-700 min-h-screen text-white flex flex-col items-center">
      <header class="w-full py-6 shadow-lg bg-opacity-70 bg-indigo-800">
        <nav class="container mx-auto flex justify-between items-center">
          <h1 class="text-3xl font-bold">My App</h1>
          <ul class="flex space-x-6">
            <li><a href="#" class="hover:text-gray-300">Home</a></li>
            <li><a href="#" class="hover:text-gray-300">Features</a></li>
            <li><a href="#" class="hover:text-gray-300">About</a></li>
            <li><router-link to="/porto" class="hover:text-gray-300">Portofolio</router-link></li>
          </ul>
        </nav>
      </header>
  
      <main class="flex flex-col items-center justify-center flex-grow p-10 text-center">
        <h2 class="text-5xl font-extrabold mb-6">Welcome to Your Future App</h2>
        <p class="text-lg font-light mb-10 max-w-2xl">
          This is a beautifully designed and responsive homepage that serves as the perfect
          starting point for your next project. Tailored with love and precision.
        </p>
        <button class="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </main>
  
      <section class="bg-white text-gray-900 w-full py-16 px-8 mt-10 rounded-t-3xl shadow-lg">
        <div class="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div class="p-6 border rounded-lg shadow-md hover:shadow-xl transform transition hover:-translate-y-1">
            <h3 class="text-2xl font-bold mb-4">Interactive Design</h3>
            <p class="text-sm">
              Engage your users with an interactive and sleek user interface.
            </p>
          </div>
          <div class="p-6 border rounded-lg shadow-md hover:shadow-xl transform transition hover:-translate-y-1">
            <h3 class="text-2xl font-bold mb-4">Fast Performance</h3>
            <p class="text-sm">
              Optimized code ensures fast loading times and a great user experience.
            </p>
          </div>
          <div class="p-6 border rounded-lg shadow-md hover:shadow-xl transform transition hover:-translate-y-1">
            <h3 class="text-2xl font-bold mb-4">Scalable Structure</h3>
            <p class="text-sm">
              Our modular code design allows for easy scaling as your project grows.
            </p>
          </div>
        </div>
      </section>
  
      <footer class="py-6 text-sm">
        &copy; 2024 My App. Crafted with ❤️ using Vue 3 & Tailwind CSS.
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  /* Custom styles (if needed) */
  </style>
  