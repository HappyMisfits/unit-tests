import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {

    isValidEmail(email: string): boolean {
      return typeof email === "string" &&
        email.includes("@") && 
        email.includes(".com")
    }

    isPalindrome(word: string): boolean {
        if (typeof word !== 'string' || word.length === 0) {
            throw new Error('Input must be a string');
        }
    
        word = word.trim();
    
        const sanitized = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
        const reversed = sanitized.split('').reverse().join('');

        return sanitized === reversed;
    }
      
}
