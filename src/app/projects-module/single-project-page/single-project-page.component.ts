import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'naufik-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  title = 'waiting';

  constructor(private router: Router, private route: ActivatedRoute) { }

  public pathExists(path: string) {
    // TODO: To be replaced.
    return true;
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
