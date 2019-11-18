import { Injectable } from '@angular/core';
import { ProjectsModule } from './projects.module';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  mode = 'DEBUG';

  data = [];

  private titles: Set<string>;

  dummy = [
    {
      title: 'This Website',
      url: 'naufik-net-website',
      description: 'Yes, this, very website built using Angular and APIs.',
      imgUrl: 'https://whatson.melbourne.vic.gov.au/Placestogo/MelbourneLandmarks/Historic/PublishingImages/16223Large.jpg',
      tags: ['angular', 'portfolio', 'web'],
      hidden: false
    },
    {
      title: 'GitBlogger',
      url: 'git-blogger',
      description: 'An automation script to allow me to publish Blog posts only via Git Push. Used on the /blog part of this website',
      hidden: true,
    },
    {
      title: 'Shadow Blocks',
      url: 'shadow-blocks',
      description: 'I am super proud of this one! Java and Slick2D game ' +
        'submitted for subject (Object Oriented Software Development). Won an award!',
      imgUrl: 'https://i.imgur.com/IPtzzIM.png',
      tags: ['java', 'assignment', 'game'],
      hidden: false,
    },
    {
      title: 'We\'ll Figure it Out',
      url: 'wfio-dont-lose-your-way',
      description: 'Gets elders from point A to point B.',
      tags: ['android', 'assignment', 'capstone', 'backend'],
      hidden: false,
    },
    {
      title: 'PlayTime',
      url: 'playtime-dp-proj',
      description: '(Obsolete) C# WPF app that won\'t allow you to procrastinate before you finish tasks.',
      tags: ['C#', 'first'],
      hidden: false,
    },
    {
      title: 'TripleZero',
      url: 'triple-zero',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6l8Qqsvq_15olRm3_kMdVXBT993dzx-wPxHrpl41WyhmjSHhC',
      description: 'From Melbourne Games Week Hackathon! An Alexa-powered emergency dispatcher game.',
      tags: ['Alexa', 'Hackathon', 'Lambda'],
      hidden: true,
    },
    {
      title: 'Bills -> Wise',
      url: 'bills-arrow-wise',
      description: 'Lambda-powered automation script to automatically bill my roommate when a bill arrives via email.',
      tags: ['Javascript', 'Automation', 'Lambda'],
      hidden: true,
    },
    {
      title: 'Doorbell',
      url: 'pi-doorbel',
      description: 'My house doorbell.',
      tags: ['python', 'pi', 'iot'],
      hidden: true,
    }
  ];

  public getDummyData() {
    return this.dummy;
  }

  public getData() {
    return this.mode === 'DEBUG' ? this.getDummyData() : this.data;
  }

  public isValidProjectsRoute(key: string) {
    return this.titles.has(key);
  }
  constructor() {
    this.titles = new Set(this.getData().filter(x => !x.hidden).map(x => x.url));
  }
}
