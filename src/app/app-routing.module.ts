import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'findmeinthestore', component: LocalStoreComponent },
  { path: 'stylingandbeauty', component: HtmlEndComponent },
  { path: 'doyoulikechess', component: ChessComponent },
  { path: 'waterwaystransportation', component: DockyardComponent },
  { path: 'findmeinanotherstore', component: SessionStoreComponent },
  { path: 'capturethosepackets', component: WireSharkComponent },
  { path: 'onlineoffline', component: NetWorkComponent },
  { path: 'buggyreptile', component: BugSnakeComponent },
  { path: 'heartofyourcodestorage', component: RepositoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
