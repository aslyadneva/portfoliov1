import ecommerceSmall from './assets/ecommerce.jpg'
import ecommerceMedium from './assets/ecommerce-med.png'
import ecommerceLarge from './assets/ecom-large.png'; 

import igSmall from './assets/ig-small.png'
import igMedium from './assets/ig-med.png'
import igLarge from './assets/ig-large.png'; 

import cenexLarge from './assets/cenex-large.png'
import cenexMedium from './assets/cenex-med.png'
import cenexSmall from './assets/cenex-small.png'; 


import budgety from './assets/budgety.jpg'; 
import trillo from './assets/trillo.jpg'; 
import nexter from './assets/nexter.jpg'; 



export const projectData = {
  react: [
    {
      name: 'E-Commerce', 
      liveURL: 'https://ecom-site.netlify.app', 
      gitURL: 'https://github.com/aslyadneva/ecommerce-store',
      images: {
        small: ecommerceSmall, 
        medium: ecommerceMedium, 
        large: ecommerceLarge
      }, 
      description: 'An e-commerce site for an apparel brand. Includes adding, removing, and editing products in cart, a shopify-inspired checkout, sorting and search features.',
      keywords: ['React.js', 'Redux', 'SCSS', 'Cloud Firestore']
    }, 
    {
      name: 'IG Dashboard', 
      liveURL: 'https://ig-dashboard.netlify.app',
      gitURL: 'https://github.com/aslyadneva/Instagram-Analytics-Dashboard',
      images: {
        small: igSmall,
        medium: igMedium,
        large: igLarge
      },  
      description: 'Track any instagram account, monitor growth and engagement, get estimated post rates.', 
      keywords: ['React.js', 'Redux', 'IG Blade API', 'SCSS', 'Apex Charts']
    }, 
    {
      name: 'IT Consulting',
      liveURL: 'https://cenex-consulting-template.netlify.app/',
      gitURL: 'https://github.com/aslyadneva/CenexConsulting',
      images: {
        small: cenexSmall,
        medium: cenexMedium,
        large: cenexLarge
      },
      description: 'A multi-page template for an IT consulting agency.', 
      keywords: ['Gatsby.js', 'GraphQL', 'React.js']
    }
  ], 
  javascript: [
    {
      name: 'Budgety', 
      images: {
        small: budgety,
        medium: budgety,
        large: budgety
      },
      keywords: ['Javascript', 'IIFE']
    }
  ], 
  "html/css": [
    {
      name: 'Trillo', 
      images: {
        small: trillo,
        medium: trillo,
        large: trillo
      },
      keywords: ['HTML', 'SCSS', 'Flexbox']
    }, 
    {
      name: 'Nexter', 
      images: {
        small: nexter,
        medium: nexter,
        large: nexter
      },
      keywords: ['HTML', 'SCSS', 'CSS Grid']
    }
  ]
}