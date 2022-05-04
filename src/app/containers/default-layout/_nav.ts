import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [


  {
    title: true,
    name: 'TalanAir'
  },
  {
    name: 'Our Company ',
    url: '/notifications',
    iconComponent: { name: 'cil-star' },
    children: [
      
     
      
      {
        name: 'about us ',
        iconComponent: { name: 'cil-airplane-mode' },
        url: './base/carousel'
        
      },
      {
        name: 'Contact ',
        iconComponent: { name: '' },
        url: 'http://localhost:4200/#/base/cards',
        
      },
      
    ]
  },
  
  





  {
    title: true,
    name: 'History'
  },
  {
    name: 'History ',
    url: '/notifications',
    iconComponent: { name: 'cil-notes' },
    children: [
      
     
      {

        
        name: '3D Model ',
        iconComponent: { name: '' },
        url: '/notifications/modal'
      },
      {
        name: 'Report ',
        iconComponent: { name: '' },
        url: '/charts',
        
      },
      
    ]
  },
  



  
  
  {
    title: true,
    name: 'New Inspection'
  },
  {
    name: 'Start inspection',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      
      
      
      {
        name: 'Start ',
        url: '/base/spinners'
      },
      {
        name: 'Stop',
        url: '/base/collapse'
      },
      {
        name: 'End ',
        url: '/base/accordion'
      },
      {
        name: 'Rapport-3D',
        url: '/base/tabs'
      }
    ]
  },



  


  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Add Profile',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      
      
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },





  
  
    
  
  



  
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      
    ]
  },
];
