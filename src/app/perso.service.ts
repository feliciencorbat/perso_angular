import { Injectable } from '@angular/core';
import {Identity} from "./models/identity";
import {IDENTITY} from "./mock-data/mock-identity";
import {Goals} from "./models/goals";
import {GOALS} from "./mock-data/mock-goals";
import {ENVIRONMENT} from "./mock-data/mock-environment";
import {Environment} from "./models/environment";
import {Value} from "./models/value";
import {VALUE} from "./mock-data/mock-value";
import {Me} from "./models/me";
import {ME} from "./mock-data/mock-me";

/**
 * Service which returns mock data in components
 */
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
