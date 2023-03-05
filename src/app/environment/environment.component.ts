import {Component, OnInit} from '@angular/core';
import {PersoService} from "../perso.service";
import {Environment} from "../environment";

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit{
  environment: Environment;

  constructor(private persoService: PersoService) {}

  ngOnInit(): void {
    this.environment = this.persoService.getEnvironment();
  }
}
