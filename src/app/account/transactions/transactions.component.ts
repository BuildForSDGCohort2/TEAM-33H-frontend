import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IWallet } from '@app/models/wallet.model';
import { AlertService } from '@app/_services/alerts.service';
import { WalletService } from '@app/_services/wallet.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  wallets: any[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private walletService: WalletService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.walletService.retrieveBalance().subscribe(data => {
      if (data === undefined) {
        this.wallets = [];
      }
      this.wallets = [data];
    },
     error => this.alertService.error(error));
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  createWallet() {
    const user = localStorage.getItem('currentUser');
    console.log(user);
    this.walletService.createWallet(JSON.parse(user)).subscribe(() => { }, error => this.alertService.error(error));
  }

}
