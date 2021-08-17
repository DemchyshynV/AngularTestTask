import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoComponent} from "../todo/todo.component";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:string
  ) {
  }

  ngOnInit(): void {
  }

  close():void {
    this.dialogRef.close(false)
  }

  sendOk() {
    this.dialogRef.close(true)
  }
}
