import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naufik-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  dummy = [
    {
      title: 'This Website',
      url: 'naufik-net-website',
      description: 'Yes, this, very website built using Angular and APIs.',
      tags: ['angular', 'portfolio', 'web']
    },
    {
      title: 'GitBlogger',
      url: 'git-blogger',
      description: 'An automation script to allow me to publish Blog posts only via Git Push.'
    },
    {
      title: 'Shadow Blocks',
      url: 'shadow-blocks',
      description: 'I am super proud of this one!'
    },
    {
      title: 'We\'ll Figure it Out',
      url: 'wfio-dont-lose-your-way',
      description: 'Gets elders from point A to point B.'
    },
    {
      title: 'PlayTime',
      url: 'playtime-dp-proj',
      description: '(Obsolete) C# app to control play time.'
    },
    {
      title: 'TripleZero',
      url: 'triple-zero',
      description: 'From Melbourne Games Week Hackathon! An Alexa-powered emergency dispatcher game.'
    },
    {
      title: 'Bills -> Wise',
      url: 'bills-arrow-wise',
      description: 'Lambda-powered automation script to automatically bill my roommate when a bill arrives via email.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
