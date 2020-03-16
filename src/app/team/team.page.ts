import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage{

  constructor(private router: Router) {
   }

  onhome(){
    this.router.navigate(['/folder/Home'])
  }
}
