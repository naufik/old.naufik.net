import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'naufik-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  htmlContent = '';
  projectContent;
  pageKey;

  constructor(private router: Router, private route: ActivatedRoute, private projects: ProjectsService) { }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pageKey = params.get('id');

      this.projects.isValidProjectsRoute(this.pageKey).then((valid) => {
          if (!valid) {
            this.router.navigate(['/not-found']);
          } else {
            this.projectContent = this.projects.getContent(this.pageKey);

            this.projects.getPageBody(this.pageKey)
              .subscribe(
                (data) => {
                  if (data.status === 404) {
                    this.htmlContent = 'Something went wrong on our end.';
                    return;
                  }
                  this.htmlContent = data.body.toString();
                },
                (err) => {
                  if (err.status === 404) {
                    this.htmlContent = this.projectContent.description;
                  }
                });
          }
        });
    });
  }

}
