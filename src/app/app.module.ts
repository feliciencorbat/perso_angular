import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdentityComponent } from './identity/identity.component';
import { GoalsComponent } from './goals/goals.component';
import { EnvironmentComponent } from './environment/environment.component';
import { ValueComponent } from './value/value.component';
import { MeComponent } from './me/me.component';
import { SetElementWithMouseDirective } from './set-element-with-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    GoalsComponent,
    EnvironmentComponent,
    ValueComponent,
    MeComponent,
    SetElementWithMouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
