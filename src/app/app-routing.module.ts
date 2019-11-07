import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splashpage/splashpage.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: SplashPageComponent
}, {
  path: 'resume',
  loadChildren: () => import('./page-resume/page-resume.module').then(mod => mod.PageResumeModule),
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
