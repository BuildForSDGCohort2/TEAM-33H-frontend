import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/helpers/auth.guard';

import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { StokvetComponent } from './stokvet/stokvet.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [{
  path: '', component: AccountComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', component: DashboardComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'stokvel', component: StokvetComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'logout', component: LogoutComponent},
    { path: '', redirectTo: 'account', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
