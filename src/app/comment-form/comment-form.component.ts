import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  addComment(commentForm : NgForm){
  	this.commentService.addComment({
  		comment: commentForm.value.comment,
  		author: commentForm.value.author,
  		edit: false
  	});
  }

}
