import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-decoration',
  standalone: true,
  imports: [LayoutComponent,RouterModule],
  templateUrl: './decoration.component.html',
  styleUrl: './decoration.component.scss'
})
export class DecorationComponent {

}
