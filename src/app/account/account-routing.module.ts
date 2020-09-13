import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StokvetComponent } from './stokvet/stokvet.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [{
  path: '', component: AccountComponent,
  children: [
    { path: '', component: DashboardComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'stokvel', component: StokvetComponent },
    { path: '', redirectTo: 'account', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
