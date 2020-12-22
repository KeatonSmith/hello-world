import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '@src/app/models/work-experience.model';
import * as work_experience_data from 'src/assets/json/work-experience.json';
import * as extra_experience_data from 'src/assets/json/extra-resume-details.json';

@Component({
  selector: 'ng-ns-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  workExperience: WorkExperience[] =  JSON.parse(JSON.stringify((work_experience_data as WorkExperience[])["default"]));
  extraExperience: any = JSON.parse(JSON.stringify((extra_experience_data as any)["default"]));
  constructor() { }

  ngOnInit(): void {
  }

}
