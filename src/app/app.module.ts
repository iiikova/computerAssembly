import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ProgramComponent } from './components/program/program.component';
import { PartnersComponent } from './components/partners/partners.component';
import { StartComponent } from './components/start/start.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    AboutComponent,
    FooterComponent,
    TeachersComponent,
    ProgramComponent,
    PartnersComponent,
    StartComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
