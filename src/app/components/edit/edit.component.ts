import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ITodo} from "../../interfaces";
import {TodoService} from "../../services";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todo: ITodo

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.todo = this.todoService.findById(+id)
    })
  }

  ngOnInit(): void {
  }

}
