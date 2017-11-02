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
  	this.comments.splice(this.comments.indexOf(comment),1)
  }

  onCommentUpdated(callback){
  	this.commentSubject.asObservable().subscribe(callback);
  }

}


/*
Your comment service should have the following methods: 
  updateSubject(), getComments(), addComment(), deleteComment(), and onCommentUpdated(). 
  The methods setComments() and editComment() are nice-to-haves, but not necessary.

Your comment service should have the following variables: 
  comments (array) and subject (Observable).

Make sure your code is working as before, but using the Comment Service.
*/