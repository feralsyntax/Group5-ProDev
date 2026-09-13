import { Component, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IComment, IUser } from '../../comment';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {

  @Input() comment!: IComment;
  @Input() currentUser!: IUser;

  replying = false;

  constructor(private commentsService: CommentService, private _sanitizer: DomSanitizer) {}

  reply(): void {
    this.replying = true;
  }

  replied(): void {
    this.replying = false;
  }

  delete(): void {
    this.commentsService.delete(this.comment).subscribe((result) => {
      console.log(result);
    });
  }

  edit(): void {
    console.log('editing');
  }

  vote(value: number): void {
    // Hey!!! You can't vote your comments!!!
    if (this.currentUser.username === this.comment.user.username) {
      return;
    }
    this.commentsService.vote(this.comment, value).subscribe((result) => {
      console.log(result);
    });
  }

  getUserAvatar(): string {
    let url = this.comment.user.image.webp ? this.comment.user.image.webp : (this.comment.user.image.png ? this.comment.user.image.png : 'assets/images/avatars/not-user-image.png');
    return this._sanitizer.sanitize(SecurityContext.URL, `url(${url})`) || 'assets/images/avatars/not-user-image.png';
  }

}
