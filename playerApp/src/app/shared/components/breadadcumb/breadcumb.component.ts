import { Component, Input, OnInit } from '@angular/core';
import { BreadCumbI } from '../../interfaces/breadcumb-i';
@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent implements OnInit {
  @Input() breadcumb: BreadCumbI[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
