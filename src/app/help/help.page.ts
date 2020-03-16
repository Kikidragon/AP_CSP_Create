import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage{

  constructor(private router: Router) {
   }

  onhome(){
    this.router.navigate(['/folder/Home'])
  }
}
