import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';

const routes: Routes = [
  {
    path: 'datasets',
    component: DatasetsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasetsRoutingModule {}
