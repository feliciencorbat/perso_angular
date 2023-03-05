import {Component, OnInit} from '@angular/core';
import {PersoService} from "../perso.service";
import {Value} from "../value";

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  value: Value;

  constructor(private persoService: PersoService) {}

  ngOnInit(): void {
    this.value = this.persoService.getValue();
  }
}
