import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Input() type: "totalUsers" | "tickets" |  "pageViews" = "totalUsers";
}
