import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services";
import {ITodo} from "../../interfaces";
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "../form/form.component";
import {ConfirmComponent} from "../confirm/confirm.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[]
  showForm = false
  constructor(private todoService: TodoService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getAll();
  }


  delete(id: number): void {
    this.matDialog.open(ConfirmComponent, {
      disableClose:true,
      data: 'Delete?'
    }).afterClosed().subscribe(value => {
      if (value){
        this.todoService.delete(id)
        this.ngOnInit()
      }
    })
  }

  showHideForm():void {
    this.showForm = !this.showForm
  }

  saveEmmit() {
    this.showHideForm()
    this.ngOnInit()
  }
}
