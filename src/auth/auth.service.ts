import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    validateUser(username: string, password: string): boolean {
        const user = this.userService.findUserByUsername(username);

        return !!user && user.password === password;
    }
}
