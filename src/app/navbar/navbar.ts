import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  ngOnInit() {
    window.addEventListener('hashchange', () => {
      this.active();
    });
  }

  active() {

    const Currenthash = window.location.hash;
    console.log('Current URL:', Currenthash);

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      if (link instanceof HTMLAnchorElement) {
        if (link.hash === Currenthash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    })

  }
}
