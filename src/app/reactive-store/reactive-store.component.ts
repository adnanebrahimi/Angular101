import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactive-store.component.html',
  styleUrls: ['./reactive-store.component.scss']
})
export class ReactiveStoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
