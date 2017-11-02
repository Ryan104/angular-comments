import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { CommentService } from './comment/comment.service';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
