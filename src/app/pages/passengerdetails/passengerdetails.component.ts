import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { TrainlistComponent } from '../trainlist/trainlist.component';

@Component({
  selector: 'app-passengerdetails',
  standalone: true,
  imports: [RouterModule,HeaderComponent,CommonModule,TrainlistComponent],
  templateUrl: './passengerdetails.component.html',
  styleUrl: './passengerdetails.component.scss'
})
export class PassengerdetailsComponent {

}
