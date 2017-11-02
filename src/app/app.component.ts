import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommentService } from './comment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formSubmit : boolean; /*disable submit if comment fields empty*/
  comments = this.commentService.getComments();

  constructor(private commentService : CommentService){}

  ngOnInit(){
  	this.formSubmit = false;
  	this.commentService.onCommentUpdated(comments => {
  		this.comments = comments;
  	});
  }

  addComment(commentForm : NgForm){
  	this.commentService.addComment({
  		comment: commentForm.value.comment,
  		author: commentForm.value.author,
  		edit: false
  	});
  }

  deleteComment(comment){
  	this.commentService.deleteComment(comment);
  }

  enableEdit(comment){
  	this.comments.forEach(c => (c == comment) ? c.edit = true : null);
  		
  		
  	
  }

  saveEdit(comment){
  	this.commentService.editComment(comment);
  }
}
