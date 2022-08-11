import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imperative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imperative.component.html',
  styleUrls: ['./imperative.component.scss']
})
export class ImperativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
