import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

    Events = [];
    calendarOptions: CalendarOptions | undefined;
    
    constructor(private httpClient: HttpClient) { }

    onDateClick(res: { dateStr: string; }) {
      alert('Clicked on date : ' + res.dateStr)
    }

    ngOnInit(){
      setTimeout(() => {
        return this.httpClient.get('http://localhost:8888/event.php')
          .subscribe(res => {
              this.Events.push(res);
              console.log(this.Events);
          });
      }, 2200);

      setTimeout(() => {
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.onDateClick.bind(this),
          events: this.Events
        };
      }, 2500);
          
      }  

}