import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../services";
import {ConfirmComponent} from "../confirm/confirm.component";
import {MatDialog} from "@angular/material/dialog";
import {ITodo} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input()
  delete: boolean
  @Input()
  todo: ITodo
  @Output()
  saveEmmit = new EventEmitter<boolean>()

  constructor(private todoService: TodoService, private matDialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.todo?.name, [Validators.required]),
      description: new FormControl(this.todo?.description, [Validators.required])
    })
  }

  save(): void {
    this.todoService.save({...this.todo, ...this.form.getRawValue()})
    this.saveEmmit.emit(true)
    this.router.navigate([''])
  }


  deleteItem(): void {
    this.matDialog.open(ConfirmComponent, {
      disableClose: true,
      data: 'Delete?'
    }).afterClosed().subscribe(value => {
      console.log(value);
      if (value) {
        this.todoService.delete(this.todo.id)
        this.router.navigate([''])
      }
    })
  }

  saveEdited() {
    this.matDialog.open(ConfirmComponent, {
      disableClose: true,
      data: 'Save?'
    }).afterClosed().subscribe(value => {
      if (value) {
        this.save()
      }
    })
  }

  cancel() {
    this.matDialog.open(ConfirmComponent, {
      disableClose: true,
      data: 'Cancel?'
    }).afterClosed().subscribe(value => {
      if (value){
        this.router.navigate([''])
      }
    })
  }
}
