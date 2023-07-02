import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrainingPlansComponent} from "./training-plans/training-plans.component";

const routes: Routes = [
  { path: 'training-plans', component: TrainingPlansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
