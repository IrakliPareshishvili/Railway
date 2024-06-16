import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetDeparturesService } from '../../services/get-departures.service';
import { NavigationExtras, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent {

  @Input() stations : any;


  trainsData = {
    from : "",
    to : "",
    date : "",
  }

  constructor(private router: Router, private getDepartureService: GetDeparturesService) {}
  ngOninit() :void {

  }

  getDepartures(): void {
    this.getDepartureService.getDepartures(this.trainsData.from, this.trainsData.to, this.trainsData.date)
      .subscribe(data => {
        localStorage.setItem('departureData', JSON.stringify(data))
        this.getDepartureService.departureData = data;
        this.router.navigate(['trainlist']);
      });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.getDepartures();
    } else {
      window.alert('ყველა ველი შესავსებია!');
    }
  }
}




