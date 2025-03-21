import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../../../../../models/user';
import { UserCreateService } from './sevices/user-create.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent {
  constructor(private userCreateService: UserCreateService) {}

  createUser(userData: User) {
    this.userCreateService.addUser(userData);
  }
}
