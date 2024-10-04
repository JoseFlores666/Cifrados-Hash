import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corregido: styleUrls en plural
})
export class NavbarComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}

}
