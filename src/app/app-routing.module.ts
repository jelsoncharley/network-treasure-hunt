import * as CryptoJS from 'crypto-js'
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
  { path: CryptoJS.AES.decrypt("U2FsdGVkX19c+F8OxZQAetztxCbxi6Biem+mOTUhZ5s=", "NTH").toString(CryptoJS.enc.Utf8), component: RulesComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX19DNbK8unrcnbGtSLHIw13ixg4+7cmMTNA=", "NTH").toString(CryptoJS.enc.Utf8), component: SessionStoreComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX19ieUvdkLKA54pxs5jGe6EfUVxe26jGAv9s4DHhClNhtao2gskAW9p8", "NTH").toString(CryptoJS.enc.Utf8), component: LocalStoreComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX19VfLQ4T+P1Aq3ZFUCiqPEiJjkYbkdg3Dw=", "NTH").toString(CryptoJS.enc.Utf8), component: IpDecemberComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX18/H/PGy6GlGG7RzTmlMIy2KbR0p2aGEGk=", "NTH").toString(CryptoJS.enc.Utf8), component: ChessComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX1+a+n4ALHafOQSEpFsYSkK/IGyy+UiDyjE=", "NTH").toString(CryptoJS.enc.Utf8), component: EndGameComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX187Mn1mLdgaT3L9KOhOnA/EZ/Tj8GfQ8K5TBeY2X5PtcrUWlYGPbBbo", "NTH").toString(CryptoJS.enc.Utf8), component: WireSharkComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX1+bXASFS4m1FX7TvB+9FRnVpwK3gEYhGpA=", "NTH").toString(CryptoJS.enc.Utf8), component: RepositoryComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX19FPL6qq3JuVH8zXDqSnAPvx5xyKhhxUrSQggf5ZUszhsF6KpWICbdV", "NTH").toString(CryptoJS.enc.Utf8), component: HtmlEndComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX1+wEn3SR5+WglK7DZdZGSxLSnU9ypDpuWc=", "NTH").toString(CryptoJS.enc.Utf8), component: WorkNetComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX1/TfEMlP9J40pmZrYMTFpHfTrlgxrCYYjk=", "NTH").toString(CryptoJS.enc.Utf8), component: HomeComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX18rnsY5Tqh6LNscQCLMesbp7kR1cgLJF28=", "NTH").toString(CryptoJS.enc.Utf8), component: LostApiComponent },
  { path: CryptoJS.AES.decrypt("U2FsdGVkX19SoDN2Zg+AJxVE3tIA5hc68qk+Xr6oU9q5o78NE90UCUzSpM5Muufg", "NTH").toString(CryptoJS.enc.Utf8), component: DockyardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
