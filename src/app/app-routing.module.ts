import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'all-users', loadChildren: () => import('../app/pages/all-users/all-users.module').then(m => m.AllUsersModule) },
  // { path: 'users/:id', loadChildren: () => import('./pages/user-detail/user-detail.module').then(m => m.UserDetailModule) },
  { path: '**', redirectTo: 'all-users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
