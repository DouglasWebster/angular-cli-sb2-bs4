import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-cmp',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
})
export class TimelineComponent { }


@Component({
  selector: 'app-chat-cmp',
  templateUrl: './chat.html'
})
export class ChatComponent {
  public disabled = false;
 }

@Component({
  selector: 'app-notifications-cmp',
  templateUrl: './notifications.html'
})
export class NotificationComponent { }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  /* Alert component */
  public alerts: Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }
}
