import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate(['center-login']);
  }
  goToHome(){
    this.router.navigate(['center-main']);
  }
  goToProjetos(){
    this.router.navigate(['center-projetos']);
  }
  goToODS(){
    this.router.navigate(['center-ods']);
  }
}
