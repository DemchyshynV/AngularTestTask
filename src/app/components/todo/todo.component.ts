import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ITodo} from "../../interfaces";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: ITodo
  @Output()
  emitId = new EventEmitter<number>()
  panelOpenState = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.emitId.emit(this.todo.id)
  }

  edit():void {
    this.router.navigate(['edit', this.todo.id])
  }
}
