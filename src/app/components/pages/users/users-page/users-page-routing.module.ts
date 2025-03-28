import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './users-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    loadChildren: () => import('./users-list/users-list.module').then((m) => m.UsersListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
