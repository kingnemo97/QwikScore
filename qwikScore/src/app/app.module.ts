import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { MatRadioModule } from '@angular/material/radio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;


import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { DataServiceService } from './data-service.service';
import { CurrentLadderComponent } from './components/current-ladder/current-ladder.component';
import { PredictedLadderComponent } from './components/predicted-ladder/predicted-ladder.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component'
import { NavComponent } from './components/nav/nav.component';
import { TeamOneSelectorComponent } from './components/team-one-selector/team-one-selector.component';
import { TeamTwoSelectorComponent } from './components/team-two-selector/team-two-selector.component';
import { MatchComponent } from './components/match/match.component';
import { CompleteGameComponent } from './components/match/complete-game/complete-game.component';
import { IncompleteGameComponent } from './components/match/incomplete-game/incomplete-game.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    CurrentLadderComponent,
    PredictedLadderComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TeamOneSelectorComponent,
    TeamTwoSelectorComponent,
    MatchComponent,
    CompleteGameComponent,
    IncompleteGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    MatRadioModule,
    BrowserAnimationsModule,
    FormsModule


  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
