import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseItemComponent } from './showcase-item/showcase-item.component';


@NgModule({
  declarations: [ProjectsPageComponent, ShowcaseComponent, ShowcaseItemComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
