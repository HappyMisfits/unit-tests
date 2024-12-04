import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class MathsService {

    constructor(private readonly loggerService: LoggerService) {}

    addition(a: number, b: number): number {
        const result = a + b;
        this.loggerService.log(`Addition: ${a} + ${b} = ${result}`);
        return result;
    }

    multiply(a: number, b: number): number {
        const result = a * b;

        this.loggerService.log(`Multiply: ${a} * ${b} = ${result}`);

        if (a < 0 || b < 0) {
            throw new Error('Negative numbers are not allowed');
        }

        return a * b;
    }

}
