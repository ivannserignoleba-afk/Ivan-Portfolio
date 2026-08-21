const projects = {
  kanoe: {
    title: 'KANOE Cosmetic', type: 'E-COMMERCE',
    description: 'Boutique cosmétique moderne conçue pour présenter des produits beauté avec une navigation claire et une expérience responsive.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Catalogue de produits', 'Interface responsive', 'Navigation fluide', 'Design orienté e-commerce'],
    live: 'https://ivannserignoleba-afk.github.io/KANOE-COSMETIC/',
    github: 'https://github.com/ivannserignoleba-afk/KANOE-COSMETIC', icon: 'fa-store'
  },
  tz: {
    title: 'TZ Luxe Blend', type: 'E-COMMERCE',
    description: 'Boutique web au style premium pour présenter une collection de produits beauté et accessoires.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Présentation des produits', 'Design premium', 'Responsive design', 'Navigation adaptée au mobile'],
    live: 'https://ivannserignoleba-afk.github.io/TZ-Luxe-Blend/',
    github: 'https://github.com/ivannserignoleba-afk/TZ-Luxe-Blend', icon: 'fa-gem'
  },
  salon: {
    title: 'Salon Coiffure Daloa', type: 'SITE WEB',
    description: 'Site vitrine dédié à un salon de coiffure, avec présentation des services et prestations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Présentation des services', 'Galerie', 'Tarifs', 'Responsive design'],
    live: 'https://ivannserignoleba-afk.github.io/salon-coiffure-daloa/',
    github: 'https://github.com/ivannserignoleba-afk/salon-coiffure-daloa', icon: 'fa-scissors'
  },
  coiffure: {
    title: 'Salon de Coiffure', type: 'SITE WEB',
    description: 'Site vitrine orienté présentation de prestations de coiffure et mise en valeur des services.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Présentation des prestations', 'Design responsive', 'Navigation simple'],
    live: 'https://ivannserignoleba-afk.github.io/salon-de-coiffure/',
    github: 'https://github.com/ivannserignoleba-afk/salon-de-coiffure', icon: 'fa-cut'
  },
  belhotel: {
    title: 'Belhotel', type: 'SITE WEB',
    description: 'Projet web consacré à la présentation d’un établissement hôtelier et de ses services.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Présentation de l’hôtel', 'Services', 'Navigation responsive'],
    live: 'https://ivannserignoleba-afk.github.io/Belhotel/',
    github: 'https://github.com/ivannserignoleba-afk/Belhotel', icon: 'fa-hotel'
  },
  edk: {
    title: 'EDK Benediction', type: 'SITE WEB',
    description: 'Projet web réalisé pour présenter et organiser du contenu autour d’une communauté.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Présentation de contenu', 'Navigation responsive', 'Interface web'],
    live: 'https://ivannserignoleba-afk.github.io/EDK-Benediction/',
    github: 'https://github.com/ivannserignoleba-afk/EDK-Benediction', icon: 'fa-church'
  },
  mavie: {
    title: 'Ma Vie', type: 'PROJET PERSONNEL',
    description: 'Projet personnel développé pour expérimenter une expérience web complète.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interface personnalisée', 'Responsive design', 'Expérimentation front-end'],
    live: 'https://ivannserignoleba-afk.github.io/ma-vie/',
    github: 'https://github.com/ivannserignoleba-afk/ma-vie', icon: 'fa-heart'
  },
  vitrine: {
    title: 'Vitrine', type: 'SITE WEB',
    description: 'Projet de site vitrine créé pour expérimenter une présentation web claire et responsive.',
    tech: ['HTML', 'CSS'],
    features: ['Présentation vitrine', 'Design responsive', 'Structure légère'],
    live: 'https://ivannserignoleba-afk.github.io/vitrine/',
    github: 'https://github.com/ivannserignoleba-afk/vitrine', icon: 'fa-globe'
  }
};

const id = new URLSearchParams(location.search).get('id') || 'kanoe';
const p = projects[id] || projects.kanoe;
document.title = `${p.title} | Ivan.DEV`;
document.getElementById('project-title').textContent = p.title;
document.getElementById('project-type').textContent = `● ${p.type}`;
document.getElementById('project-description').textContent = p.description;
document.getElementById('project-tech').innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');
document.getElementById('project-features').innerHTML = p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
document.getElementById('live-link').href = p.live;
document.getElementById('github-link').href = p.github;
document.getElementById('project-preview').innerHTML = `<i class="fas ${p.icon}"></i><span>${p.title}</span>`;
