import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocalStoreComponent } from './components/local-store/local-store.component';
import { RulesComponent } from './components/rules/rules.component';
import { HtmlEndComponent } from './components/html-end/html-end.component';
import { ChessComponent } from './components/chess/chess.component';
import { DockyardComponent } from './components/dockyard/dockyard.component';
import { SessionStoreComponent } from './components/session-store/session-store.component';
import { WireSharkComponent } from './components/wire-shark/wire-shark.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { IpDecemberComponent } from './components/ip-december/ip-december.component';
import { WorkNetComponent } from './components/work-net/work-net.component';
import { LostApiComponent } from './components/lost-api/lost-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EndGameComponent } from './components/end-game/end-game.component';
import { PreventRightDirective } from './directives/prevent-right.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalStoreComponent,
    RulesComponent,
    HtmlEndComponent,
    ChessComponent,
    DockyardComponent,
    SessionStoreComponent,
    WireSharkComponent,
    RepositoryComponent,
    IpDecemberComponent,
    WorkNetComponent,
    LostApiComponent,
    EndGameComponent,
    PreventRightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
