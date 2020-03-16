import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage{

  constructor(private router: Router) {
   }

  onhome(){
    this.router.navigate(['/folder/Home'])
  }
}
