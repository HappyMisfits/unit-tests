import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {

    log(message: string): void {
        // Simule un log, pourrait être 
        //un appel à une base de données 
        //ou un service externe.
        console.log(message);
    }

}
