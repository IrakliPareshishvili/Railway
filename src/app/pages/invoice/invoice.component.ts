import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { PaymentComponent } from '../payment/payment.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormsModule,CommonModule,HeaderComponent,FooterComponent,PaymentComponent,RouterModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {

  cardInfo: any; 

  constructor() { }

  ngOnInit(): void {
   
    const navigation = window.history.state;
    if (navigation.cardInfo) {
      this.cardInfo = navigation.cardInfo;
    }
  }

}