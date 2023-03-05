import {Component, OnInit} from '@angular/core';
import {PersoService} from "../perso.service";
import {Me} from "../models/me";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit{
  me: Me;

  constructor(private persoService: PersoService) {}

  ngOnInit(): void {
    this.me = this.persoService.getMe();
  }
}
