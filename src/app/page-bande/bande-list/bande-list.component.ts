import { Component, OnInit } from '@angular/core';
import { Bande } from '../../modele/bande';
import { BandeService } from '../../service/bande.service';

@Component({
  selector: 'app-bande-list',
  templateUrl: './bande-list.component.html',
  styleUrls: ['./bande-list.component.scss'],
})
export class BandeListComponent implements OnInit {

  bandes?: Bande[];
  selectedBande?: Bande;

  constructor(private bandeService: BandeService) {}

  ngOnInit(): void {
    this.getBande();
  }

  getBande(): void {
    this.bandeService
      .getAllBandes()
      .subscribe((bandes) => (this.bandes = bandes));

  }

  onSelect(bande: Bande): void {
    this.selectedBande = bande;
    console.log(bande);
  }
}
