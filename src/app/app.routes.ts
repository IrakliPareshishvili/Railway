import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TrainlistComponent } from './pages/trainlist/trainlist.component';
import { PassengerdetailsComponent } from './pages/passengerdetails/passengerdetails.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';




export const routes: Routes = [
    
    { path: '', component: LayoutComponent },
    { path: 'trainlist', component: TrainlistComponent},
    { path: 'passengerdetails', component: PassengerdetailsComponent},
    { path: 'payment', component: PaymentComponent},
    { path: 'invoice', component: InvoiceComponent},
    { path: "", redirectTo: "layout", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
    
];

