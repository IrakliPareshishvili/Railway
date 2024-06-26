import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  navigateHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
