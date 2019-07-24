import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocalStoreComponent } from './components/local-store/local-store.component';
import { RulesComponent } from './components/rules/rules.component';

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'findmeinthestore', component: LocalStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
