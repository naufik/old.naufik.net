import { NgModule, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
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
  path: 'projects',
  loadChildren: () => import('./projects-module/projects.module').then(mod => mod.ProjectsModule)
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
