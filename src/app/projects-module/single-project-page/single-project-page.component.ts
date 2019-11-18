import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'naufik-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  title = 'waiting';

  constructor(private router: Router, private route: ActivatedRoute, private projects: ProjectsService) { }

  public pathExists(path: string) {
    console.log(path);
    return this.projects.isValidProjectsRoute(path);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (!this.pathExists(params.get('id'))) {
        this.router.navigate(['/not-found']);
      }
      this.title = params.get('id').split('-').join(' ');
    });
  }

}
