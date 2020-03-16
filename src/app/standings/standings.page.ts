import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage{

  constructor(private router: Router) {
   }

  onhome(){
    this.router.navigate(['/folder/Home'])
  }
}
