import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentComponent } from './environment/environment.component';
import { GoalsComponent } from './goals/goals.component';
import { IdentityComponent } from './identity/identity.component';
import { MeComponent } from './me/me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  { path: "identity", component: IdentityComponent },
  { path: "goals", component: GoalsComponent },
  { path: "environment", component: EnvironmentComponent },
  { path: "value", component: ValueComponent },
  { path: "me", component: MeComponent },
  { path: "", redirectTo: "identity", pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
