import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent), title: 'Inicio' },
    { path: 'proyectos', loadComponent: () => import('./pages/proyectos/proyectos').then(m => m.ProyectosComponent), title: 'Proyectos' },
    { path: 'info', loadComponent: () => import('./pages/habilidades/habilidades').then(m => m.HabilidadesComponent), title: 'Info' },
    { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto').then(m => m.ContactoComponent), title: 'Contacto' },
    { path: '**', redirectTo: '' }
];
