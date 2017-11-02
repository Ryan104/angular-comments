import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments = this.commentService.getComments();

  constructor(private commentService : CommentService) { }

  ngOnInit() {
  	this.commentService.onCommentUpdated(comments => this.comments = comments);
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
