import {Component, OnInit} from '@angular/core';
import {Identity} from "../models/identity";
import {PersoService} from "../perso.service";

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  identity: Identity;

  constructor(private persoService: PersoService) {}

  ngOnInit(): void {
    this.identity = this.persoService.getIdentity();
  }

}
