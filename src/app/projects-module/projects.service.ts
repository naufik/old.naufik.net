import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

export interface ProjectsList {
  projects: any[];
}

export interface ProjectData {
  title: string;
  description: string;
  imgUrl: string;
  tags: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  readonly MODE = 'DEBUG';
  readonly DATA_SRC = 'https://naufik.net/stash/projects.json';

  data = [];

  private titles: Set<string>;

  dummy = [
    {
      title: 'This Website',
      url: 'naufik-net-website',
      description: 'This very portfolio website.',
      imgUrl: 'https://naufik.net/stash/madebymygf.png',
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
      content: '<p class="wip">hello</p>',
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
    return this.MODE === 'DEBUG' ? this.getDummyData() : this.data;
  }

  public isValidProjectsRoute(key: string) {
    return this.titles.has(key);
  }

  public getContent(key: string) {
    const maybeData = this.getData().filter(x => x.url === key);

    return maybeData.length !== 1 ? null : maybeData[0];
  }

  public getPageBody(key: string) {
    // this will be changed into something better later on.
    return this.http.get('https://naufik.net/stash/temp/' + key + '.frag.html',
      { responseType: 'text', observe: 'response' });
  }

  constructor(private http: HttpClient) {
    this.titles = new Set(this.getData().filter(x => !x.hidden).map(x => x.url));

    this.http.get(this.DATA_SRC, { observe: 'response' }).subscribe((data: HttpResponse<ProjectsList>) => {
      this.data = data.body.projects;
    });
  }
}
