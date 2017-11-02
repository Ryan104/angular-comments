import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentService {
  private comments = [
	  {comment: 'first comment!', author: 'Unknown', edit: false},
	  {comment: 'nice work!', author: 'Unknown', edit: false},
	  {comment: 'I would also like to congratulate you!', author: 'Unknown', edit: false}
  ];
  private commentSubject = new Subject();

  constructor() { }

  private updateSubject(){
  	this.commentSubject.next(this.comments);
  }

  getComments(){
  	return this.comments;
  }

  addComment(comment){
  	this.comments.push(comment);
  	this.updateSubject();
  }

  deleteComment(comment){
  	this.comments.splice(this.comments.indexOf(comment),1);
  	this.updateSubject();
  }

  onCommentUpdated(callback){
  	this.commentSubject.asObservable().subscribe(callback);
  }

  editComment(comment){
  	this.comments.forEach(c => {
  		if (c == comment) {
  			c.edit = false;
  			this.updateSubject();
  		}
  	})
  }
}
