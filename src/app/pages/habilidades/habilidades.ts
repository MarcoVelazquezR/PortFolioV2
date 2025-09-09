import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-habilidades',
  imports: [
    CommonModule
  ],
  templateUrl: './habilidades.html',
  styleUrls: ['./habilidades.scss']
})
export class HabilidadesComponent {
  placeholder = 'assets/tech/_placeholder.png';

  dominadas = [
    {
      nombre: 'Angular', logo: 'assets/tech/angular.png',
      desc: 'SPA responsivas, standalone components, señales y RxJS.'
    },
    {
      nombre: 'AngularJS (1.x)', logo: 'assets/tech/angularjs.png',
      desc: 'Apps legacy ES5, directivas, controladores y Kendo UI.'
    },
    {
      nombre: 'JavaScript', logo: 'assets/tech/js.png',
      desc: 'Directivas, controladores, funciones.'
    },
    {
      nombre: 'TypeScript', logo: 'assets/tech/ts.png',
      desc: 'Tipado estático, utilidades genéricas y libs compartidas.'
    },
    {
      nombre: 'Java 8', logo: 'assets/tech/java.png',
      desc: 'Servicios Spring, utilidades, mapeos JDBC/JAXB.'
    },
    {
      nombre: 'Oracle / PL/SQL', logo: 'assets/tech/oracle.png',
      desc: 'CTEs, vistas complejas, optimización y paquetes.'
    },
    {
      nombre: 'Spring', logo: 'assets/tech/spring.png',
      desc: 'REST, Quartz jobs, integración con Oracle y mail.'
    },
    {
      nombre: 'JasperReports', logo: 'assets/tech/jasperreports.png',
      desc: 'PDF/Excel con subreportes, formatos y datasource custom.'
    },
    {
      nombre: 'Apache POI', logo: 'assets/tech/poi.png',
      desc: 'Excel con estilos, plantillas y generación masiva.'
    },
    {
      nombre: 'BouncyCastle', logo: 'assets/tech/bc.png',
      desc: 'Llaves .key, PKCS#8, sellado CFDI y criptografía.'
    },
    {
      nombre: 'Git', logo: 'assets/tech/git.png',
      desc: 'Flujos de ramas, hotfix, resolución de refs rotas.'
    },
    {
      nombre: 'HTML/CSS', logo: 'assets/tech/htmlcss.png',
      desc: 'Layouts, animaciones sutiles, accesibilidad básica.'
    },
    {
      nombre: 'Kendo UI', logo: 'assets/tech/kendo.png',
      desc: 'Grids, combos, datepickers y personalización AngularJS.'
    },
    {
      nombre: 'Node.js', logo: 'assets/tech/node.png',
      desc: 'CLI, scripts y utilidades backend simples.'
    }
  ];

  conocidas = [
    {
      nombre: 'PHP/Laravel', logo: 'assets/tech/laravel.png',
      desc: 'APIs CRUD y plantillas Blade sencillas.'
    },
    {
      nombre: 'React', logo: 'assets/tech/react.png',
      desc: 'Componentes, hooks y Vite para demos.'
    },
    {
      nombre: 'Android/Kotlin', logo: 'assets/tech/kotlin.png',
      desc: 'Pref. Android con Kotlin para apps nativas.'
    },
    {
      nombre: 'Docker', logo: 'assets/tech/docker.png',
      desc: 'Contenedores básicos para dev y pruebas.'
    },
    {
      nombre: 'PostgreSQL', logo: 'assets/tech/postgres.png',
      desc: 'Consultas, índices y funciones básicas.'
    },
    {
      nombre: 'MongoDB', logo: 'assets/tech/mongo.png',
      desc: 'Modelado simple de documentos.'
    }
  ];

  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    if (img && img.src !== this.placeholder) img.src = this.placeholder;
  }
}