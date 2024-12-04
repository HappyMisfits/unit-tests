import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {

    calculateTotal(products: { price: number }[], discount: number): number {
        // Implémentation minimale pour commencer
        return 0; // À compléter par les élèves.
    }

}
