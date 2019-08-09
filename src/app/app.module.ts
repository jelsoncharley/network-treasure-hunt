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
import { NetWorkComponent } from './components/net-work/net-work.component';
import { BugSnakeComponent } from './components/bug-snake/bug-snake.component';
import { WireSharkComponent } from './components/wire-shark/wire-shark.component';
import { RepositoryComponent } from './components/repository/repository.component';

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
    NetWorkComponent,
    BugSnakeComponent,
    WireSharkComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
