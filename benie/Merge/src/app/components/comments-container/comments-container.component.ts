import { Component, Input } from '@angular/core';
import { IUser } from '../../comment';
import { TempData } from '../../data/comments';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent {

  @Input() comments: any[] = [];
  // TODO: move to property place when users are available
  currentUser: IUser = TempData.currentUser;

}
