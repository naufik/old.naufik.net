import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'naufik-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss']
})
export class ShowcaseItemComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  link: string;

  constructor() { }

  ngOnInit() {
  }

}
