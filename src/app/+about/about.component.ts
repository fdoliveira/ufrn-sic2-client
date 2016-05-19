import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

  id: string;

  constructor(private _params: RouteSegment) {}

  ngOnInit() {
  }

	buttonClick(): void {
		this.id = this._params.getParam('id');
	}
}
