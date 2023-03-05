import { Injectable } from '@angular/core';
import {Identity} from "./identity";
import {IDENTITY} from "./mock-identity";

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  getIdentity(): Identity {
    return IDENTITY;
  }
}
