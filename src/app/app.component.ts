import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homepage';


  cities = [
    'Aberdeen', 'Edinburgh', 'Manchester', 'Oxford', 'Belfast', 'Glasgow', 'Merseyside', 'Sheffield', 'Birmingham', 'Hull',
    'North East', 'South coast', 'Brighton Sussex', 'Leeds', 'Northampton', 'South West', 'Cambridge and East Anglia', 'Leicester', 'Milton Keynes', 'Stoke',
    'Cardiff','London', 'Nottingham'
  ];

  
  activeTab: string = 'order';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
