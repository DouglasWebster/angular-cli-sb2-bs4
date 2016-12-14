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
  public disabled: boolean = false;
 }

@Component({
  selector: 'app-notifications-cmp',
  templateUrl: './notifications.html'
})
export class NotificationComponent { }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  /* Carousel Variable */
  noWrapSlides: boolean = false;
  myInterval: number = 5000;
  index: number = 0;
  slides: Array<any> = [];
  imgUrl: Array<any> = [
    `assets/img/slider1.jpg`,
    `assets/img/slider2.jpg`,
    `assets/img/slider3.jpg`,
    `assets/img/slider0.jpg`
  ];
  /* END */

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
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
  }


  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }
  /* END*/


  /* Carousel */
  addSlide() {
    let i = this.slides.length;
    this.slides.push({
      image: this.imgUrl[i],
      text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
            ${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
    });
  }
  /* END */
}
