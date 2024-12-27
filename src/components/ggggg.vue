<template>
    <div class="app-container">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="logo">Sn</div>
        <ul class="nav-links">
          <li>Home</li>
          <li>Portfolio</li>
          <li><button class="contact-button">Contact Me</button></li>
        </ul>
      </nav>
  
      <!-- Hero Section -->
      <header class="hero">
        <div class="hero-content">
          <p class="subheading">UX/UI Designer</p>
          <h1 class="heading">Portfolio</h1>
          <div class="year">2023 – 2024</div>
        </div>
        <div class="footer-note">Susan Nkere</div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
  /* General Layout */
  .app-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Navbar Styling */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background-color: #f5e0cc; /* Beige tone for navbar */
  }
  
  .logo {
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    font-weight: 600;
  }
  
  .nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
  }
  
  .nav-links li {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    color: black;
  }
  
  .contact-button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-family: "Lato", sans-serif;
    cursor: pointer;
  }
  
  .contact-button:hover {
    opacity: 0.9;
  }
  
  /* Hero Section */
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: calc(100vh - 80px); /* Adjust based on navbar height */
    background-color: #fff;
    padding: 40px 0;
    position: relative;
  }
  
  .hero-content {
    text-align: left;
  }
  
  .subheading {
    font-family: "Lato", sans-serif;
    font-size: 24px;
    color: black;
  }
  
  .heading {
    font-family: "Oswald", sans-serif;
    font-size: 72px;
    color: black;
    margin: 10px 0;
  }
  
  .year {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  
  .footer-note {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    color: black;
    align-self: flex-end;
    margin-top: auto;
  }
  </style>
  


  <template>
    <div class="min-h-screen bg-gray-50">
      <!-- Main Content -->
      <main class="container mx-auto px-8">
        <!-- Hero Section -->
        <section class="py-20">
          <p class="text-xl mb-2">UX/UI Designer</p>
          <h1 class="text-6xl font-serif mb-16">Portfolio</h1>
          <div class="relative">
            <div class="w-full h-px bg-[#DBC1AC]"></div>
            <div class="flex justify-between items-center mt-4">
              <span>Susan Nkere</span>
              <span class="text-gray-600">2023-2024</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>