import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() userAdded: EventEmitter<{}> = new EventEmitter<{}>()
  name: string;
  description: string;
  staffType: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.userAdded.emit({
      name: this.name,
      description: this.description,
      staffType: this.staffType
    })
    this.name = ''; this.description = '';
  }
}
