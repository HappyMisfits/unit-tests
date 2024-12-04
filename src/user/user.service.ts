import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findUserByUsername(username: string): { username: string; password: string } | null {
        return null; // pas besoin de l'implémenter
    }
}
