import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharaterDetailsComponent } from './feature/character-info/charater-details/charater-details.component';
import { CharaterListComponent } from './feature/character-info/charater-list/charater-list.component';

const routes: Routes = [
  {
    path: "", component: CharaterListComponent
  },
  {
    path: "character-details/:id", component: CharaterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
