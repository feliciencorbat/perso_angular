import { Injectable } from '@angular/core';
import {Identity} from "./identity";
import {IDENTITY} from "./mock-identity";
import {Goals} from "./goals";
import {GOALS} from "./mock-goals";

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  getIdentity(): Identity {
    return IDENTITY;
  }

  getGoals(): Goals {
    return GOALS;
  }
}
