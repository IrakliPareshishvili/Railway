import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { CommonModule, } from '@angular/common';
import { PassengerdetailsComponent } from '../passengerdetails/passengerdetails.component';
import { GetDeparturesService } from '../../services/get-departures.service';


@Component({
  selector: 'app-trainlist',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent,CommonModule,PassengerdetailsComponent],
  templateUrl: './trainlist.component.html',
  styleUrl: './trainlist.component.scss'
})

export class TrainlistComponent implements OnInit {

  departureData: any;
  departure: any;

  constructor(private route: ActivatedRoute, private router: Router, private getDepartureDataService:GetDeparturesService) { }

  ngOnInit(): void {
    if(this.getDepartureDataService.departureData) {
      this.departureData = this.getDepartureDataService.departureData;
    } else {
      if(localStorage.getItem('departureData')){
        this.departureData = JSON.parse(localStorage.getItem('departureData')!)
      } 
    }
  }

  bookTrain(train: any): void {
    this.router.navigate(['/passengerdetails'], { state: { train } });
  }
 
  
}