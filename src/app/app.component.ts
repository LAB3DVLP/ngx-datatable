import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import packageInfo from 'projects/swimlane/ngx-datatable/package.json';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
    '../../projects/swimlane/ngx-datatable/src/lib/themes/material.scss',
    '../../projects/swimlane/ngx-datatable/src/lib/themes/dark.scss',
    '../../projects/swimlane/ngx-datatable/src/lib/themes/bootstrap.scss'
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppComponent {
  state: any;

  version = packageInfo.version;

  constructor(location: Location) {
    this.state = location.path(true);
  }
}
