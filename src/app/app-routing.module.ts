import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'all-users', loadChildren: () => import('../app/pages/all-users/all-users.module').then(m => m.AllUsersModule) },
  { path: 'users/:id', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: 'all-users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
