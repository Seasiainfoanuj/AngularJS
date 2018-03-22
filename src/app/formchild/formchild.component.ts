import { Component,Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-formchild',
  templateUrl: './formchild.component.html',
  styleUrls: ['./formchild.component.css']
})
export class FormchildComponent implements OnInit {

  @Input() childData: string;


  constructor() { }

  ngOnInit() {
  }

}
