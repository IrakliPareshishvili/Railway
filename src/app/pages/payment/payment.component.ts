import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PassengerdetailsComponent } from '../passengerdetails/passengerdetails.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent,CommonModule,PassengerdetailsComponent,FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  cardInfo = {
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  };

  constructor(private router: Router) { }

  onSubmit(): void {
   
    console.log('Submitted Card Info:', this.cardInfo);

    this.router.navigate(['/invoice'], { state: { cardInfo: this.cardInfo } });
  }
}