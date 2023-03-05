import {Component, OnInit} from '@angular/core';
import {PersoService} from "../perso.service";
import {Goals} from "../models/goals";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goals;

  constructor(private persoService: PersoService) {}

  ngOnInit(): void {
    this.goals = this.persoService.getGoals();
  }
}
