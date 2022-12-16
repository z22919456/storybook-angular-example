import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() name = ''
  /**
   * 部門
   */
  @Input() org = ''
  @Input() src = 'https://fakeimg.pl/300/'
  @Input() date = new Date()
  @Input() enable = true
  
  liked = 0

  handleLike() {
    this.liked ++ 
  }
}
