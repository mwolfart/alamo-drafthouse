import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackgroundDetailComponent } from 'src/components/background-detail/background-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuTheaterComponent } from 'src/components/menu-theater/menu-theater.component';
import { ListFilmsComponent } from 'src/components/list-films/list-films.component';
import { ActionButtonComponent } from 'src/components/action-button/action-button.component';
import { CustomLinkComponent } from 'src/components/custom-link/custom-link.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDetailComponent,
    ListFilmsComponent,
    ActionButtonComponent,
    CustomLinkComponent,
    MenuTheaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
