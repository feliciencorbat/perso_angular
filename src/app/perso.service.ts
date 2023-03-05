import { Injectable } from '@angular/core';
import {Identity} from "./identity";
import {IDENTITY} from "./mock-identity";
import {Goals} from "./goals";
import {GOALS} from "./mock-goals";
import {ENVIRONMENT} from "./mock-environment";
import {Environment} from "./environment";
import {Value} from "./value";
import {VALUE} from "./mock-value";
import {Me} from "./me";
import {ME} from "./mock-me";

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

  getEnvironment(): Environment {
    return ENVIRONMENT;
  }

  getValue(): Value {
    return VALUE;
  }

  getMe(): Me {
    return ME;
  }
}
