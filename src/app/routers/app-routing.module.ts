import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../modules/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/resume',
    pathMatch: 'full',
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('../modules/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
