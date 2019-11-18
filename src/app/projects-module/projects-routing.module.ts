import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';


const routes: Routes = [{
  path: '',
  component: ProjectsPageComponent
}, {
  path: 'view/:id',
  component: SingleProjectPageComponent,
}, {
  path: 'view',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
