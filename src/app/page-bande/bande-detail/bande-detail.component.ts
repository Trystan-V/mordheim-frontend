import { Component, OnInit } from '@angular/core';
import { Bande } from '../../modele/bande';
import { BandeService } from '../../service/bande.service';

@Component({
  selector: 'app-bande-detail',
  templateUrl: './bande-detail.component.html',
  styleUrls: ['./bande-detail.component.scss']
})
export class BandeDetailComponent implements OnInit {

  bandes?: Bande[];

  constructor(private bandeService : BandeService) { }

  ngOnInit(): void {
    this.getBande();
  }

  getBande(): void {
    this.bandeService.getAllBandes().subscribe(bandes => this.bandes = bandes);
  }
}
