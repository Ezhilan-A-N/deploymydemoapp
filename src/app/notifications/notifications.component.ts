import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  circ1= ['4th Graduation Day on 13th July 2019',
  'Indian Council of Medical Research(ICMR) funded four Days National Level Workshop on Engineering in Diabetology from 12th and 15thJune 2019',
  'Two days National workshop on Manufacturing Application of Micromachining for Automobile Components on 12th and 13thJune 2019',
  'Book Bank Circular',
  'Culturals Date will be announced soon',
   'BRNS Sponsored Three Days Seminar On December 12th to 14th December 2019.',
      'FDP Brouchure-Computational Intelligence',
      'Six days FDTP on “GE8292 - Engineering Mechanics” from 18th November to 23rd November 2019',
      'Two days National Level Workshop on “ Nano Technology - Mechanical Engineers Perspective” from 29th November to 30thNovember 2019.',
      'All India Seminar On Manufacturing Application of Micromachining for Automobile Components'];

  circ2 = ['BRNS Sponsored Three Days Seminar On December 12th to 14th December 2019.',
      'FDP Brouchure-Computational Intelligence',
      'Six days FDTP on “GE8292 - Engineering Mechanics” from 18th November to 23rd November 2019',
      'Two days National Level Workshop on “ Nano Technology - Mechanical Engineers Perspective” from 29th November to 30thNovember 2019.',
      'All India Seminar On Manufacturing Application of Micromachining for Automobile Components on 16th and 17thjuly 2019.' ];

    circ3= ['15 Jun Ramzan Celebration',
      '18 Aug Onam Festival Celebration',
      '18 Oct Ayudha Pooja Celebration',
      '18 Sep Vinayagar Chathurthi Celebration',
      '12 Dec Karthigai Deepam Celebration',
      '1 Jan Happy New YEAR',
      '14,15,16,17 Jan Pongal Celebration'];
  }
