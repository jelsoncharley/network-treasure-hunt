import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { EndGameComponent } from './components/end-game/end-game.component';

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'rolldice', component: SessionStoreComponent },
  { path: 'findmeinthestore', component: LocalStoreComponent },
  { path: 'CatchupParse', component: IpDecemberComponent },
  { path: 'doyoulikechess', component: ChessComponent },
  { path: '9688', component: EndGameComponent },
  { path: 'capturethosepackets', component: WireSharkComponent },
  { path: 'sec558', component: RepositoryComponent },
  { path: 'stylingandbeauty', component: HtmlEndComponent },
  { path: 'schwarzenegger', component: WorkNetComponent },
  { path: 'home', component: HomeComponent },
  { path: '192.169.198.199', component: LostApiComponent },
  { path: 'waterwaystransportation', component: DockyardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
