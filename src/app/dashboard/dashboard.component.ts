import { Component } from '@angular/core';
import { AdminmenuComponent } from "../components/adminmenu/adminmenu.component";
import { StatsComponent } from "../components/stats/stats.component";

@Component({
  selector: 'app-dashboard',
  imports: [AdminmenuComponent, StatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
