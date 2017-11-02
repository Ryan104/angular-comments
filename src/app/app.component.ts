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
  comments = [];
  // comments = [
  //     {comment: 'first comment!', author: 'Unknown', edit: false},
  //     {comment: 'nice work!', author: 'Unknown', edit: false},
  //     {comment: 'I would also like to congratulate you!', author: 'Unknown', edit: false}
  // ];

  constructor(private commentService : CommentService){}

  ngOnInit(){
  	this.formSubmit = false;
  	this.commentService.onCommentUpdated(comments => (this.comments = comments));
  }

  addComment(commentForm : NgForm){
  	this.comments.push({comment: commentForm.value.comment, author: commentForm.value.author, edit: false});
  }

  deleteComment(comment){
  	this.comments.splice(this.comments.indexOf(comment),1)
  }

  enableEdit(comment){
  	this.comments.forEach(c => {
  		if (c == comment) {
  			c.edit = true;
  		}
  	})
  }

  saveEdit(comment){
  	this.comments.forEach(c => {
  		if (c == comment) {
  			c.edit = false;
  		}
  	})
  }
}
