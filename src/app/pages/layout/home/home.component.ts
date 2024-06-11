import { Component } from '@angular/core';
import { StationService } from '../../../services/station.service';
import { HttpClientModule } from '@angular/common/http';
import { TrainService } from '../../../services/train.service';
import { ReservationFormComponent } from '../../reservation-form/reservation-form.component';
import { IStation } from '../../../models/station.model';
import { RouterModule } from '@angular/router';
import { DecorationComponent } from '../../decoration/decoration.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReservationFormComponent, DecorationComponent, HttpClientModule, RouterModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  trains : [] = [];
  stations: IStation[] = [];
  constructor (private stationService : StationService, private trainService : TrainService) { }

  ngOnInit():void {
    this.getStations();
    this.getTrains();
  }

  getStations() : void {
    this.stationService.getStations().subscribe(stations => this.stations = stations);
    console.log(this.stations)
  }

  getTrains() : void {
    this.trainService.getTrains().subscribe(trains => this.trains = trains);
    
  }

}
