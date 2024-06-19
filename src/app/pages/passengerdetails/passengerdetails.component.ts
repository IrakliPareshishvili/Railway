import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrainlistComponent } from '../trainlist/trainlist.component';
import { GetDeparturesService } from '../../services/get-departures.service';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-passengerdetails',
  standalone: true,
  imports: [RouterModule,HeaderComponent,CommonModule,TrainlistComponent,FooterComponent],
  templateUrl: './passengerdetails.component.html',
  styleUrl: './passengerdetails.component.scss'
})
export class PassengerdetailsComponent implements OnInit {

  train: any;

  constructor(private router: Router, private getDepartureDataService: GetDeparturesService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.train = navigation.extras.state['train'];
    }
  }

  ngOnInit(): void {
    if (!this.train) {
      if (localStorage.getItem('trainData')) {
        this.train = JSON.parse(localStorage.getItem('trainData')!);
      } 
    }
  }

  navigateToPayment(): void {
    this.router.navigate(['/payment']);
  }


  saveTrainData(): void {
    localStorage.setItem('trainData', JSON.stringify(this.train));
  }
}