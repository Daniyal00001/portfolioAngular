import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projectdisplay } from "../projectdisplay/projectdisplay";

@Component({

  selector: 'app-projects',
  imports: [Projectdisplay, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    {
      title: 'Spotify Clone',
      img: 'assets/spotifyclone.png',
      alt: 'Spotify img',
      onClick: true,
      desc: "A web application that mimics the Spotify interface, allowing users to browse and play music.",
      tech1: "Html",
      tech2: "  Css",
      tech3: "JavaScript",
      github_link: "https://github.com/Daniyal00001/SpotifyyClone",
    },
    {
      title: 'Currency Converter',
      img: 'assets/currencyconverter.png',
      alt: 'currency converter',
      onClick: true,
      desc: "A web tool that converts currencies based on real-time exchange rates (manual or API-based).",
      tech1: "HTML",
      tech2: "CSS",
      tech3: "JavaScript",
      github_link: "https://github.com/Daniyal00001/Currency-Converter",
    },
    {
      title: 'Bootstrap marketing Website',
      img: 'assets/bootstrapmarketingweb.png',
      alt: 'Bootstrap marketing Website',
      onClick: true,
      desc: "A responsive marketing landing page built using Bootstrap grid, components, and modern UI practices.",
      tech1: "html",
      tech2: "css",
      tech3: "bootstrap 5",
      github_link: "https://github.com/Daniyal00001/Marketing-website",
    },
    {
      title: 'Snake Laddar Game',
      img: 'assets/snakeladdar.png',
      alt: 'Snake laddar game',
      onClick: true,
      desc: "A browser-based implementation of the classic board game with styled board, piece movement, and win logic.",
      tech1: "Html",
      tech2: "Css",
      tech3: "JavaScript",
      github_link: "https://github.com/Daniyal00001",
    },
    {
      title: 'Netflix Clone (Frontend)',
      img: 'assets/netflixx.png',
      alt: 'Netflix Clone (Frontend)',
      onClick: true,
      desc: "A frontend clone of the Netflix landing page, mimicking layout, thumbnails, and header UI.",
      tech1: "Html",
      tech2: "Css",
      tech3: "",
      github_link: "https://github.com/Daniyal00001/Netflix-clone",
    },
    {
      title: 'Rock Paper Scissors Game',
      img: 'assets/game.png',
      alt: 'Rock paper scissors Game',
      onClick: true,
      desc: " An interactive game where the player competes against the computer using RPS logic.",
      tech1: "Html",
      tech2: "Css",
      tech3: "JavaScript",
      github_link: "https://github.com/Daniyal00001/Rock-paper-scissors-game",
    }
  ];


  showProjects: boolean = false;

  selectedProject: any = null;      // this varirable is created to store specific details of card and then variable this will pass to child component as a object

  yes(project: any) {                // here parameter is set dynamically from project.html
    this.selectedProject = project;  // FOR DISPLAY OF SELECTED PROJECT  
    this.showProjects = true;
    // console.log("Selected Project:", project);
  }

  no() {
    this.showProjects = false;
  }

}
