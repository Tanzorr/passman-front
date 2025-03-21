import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { adminGuard } from '../../../guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./users-page/users-page.module').then((m) => m.UsersPageModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./user/user-page/user-create/user-create.module').then((m) => m.UserCreateModule),
        canActivate: [adminGuard],
      },
      {
        path: ':id',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: ':id/edit',
        loadChildren: () =>
          import('./user/user-page/user-edit/user-edit.module').then((m) => m.UserEditModule),
        canActivate: [adminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutesModule {}
