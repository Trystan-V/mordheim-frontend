import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Bande } from '../../modele/bande';
import { BandeService } from '../../service/bande.service';

@Component({
  selector: 'app-bande-detail',
  templateUrl: './bande-detail.component.html',
  styleUrls: ['./bande-detail.component.scss']
})
export class BandeDetailComponent implements OnInit {

  @Input() bande?: Bande;

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
