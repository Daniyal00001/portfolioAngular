import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Education } from "./education/education";
import { Experience } from "./experience/experience";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Education, Experience, Skills, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'porfolioAngular';
  
}
