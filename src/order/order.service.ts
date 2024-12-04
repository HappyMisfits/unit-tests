import { Injectable } from '@nestjs/common';
import { DiscountService } from '../discount/discount.service';


@Injectable()
export class OrderService {
    constructor(private readonly discountService: DiscountService) {}

    calculateTotal(products: { price: number }[], discount: number): number {
        // Valider la remise via le DiscountService
        if (!this.discountService.isValidDiscount(discount)) {
            throw new Error('Invalid discount value');
        }
    
        // Calculer le total des produits
        const total = products.reduce((sum, product) => sum + product.price, 0);
    
        // Appliquer la remise
        const discountAmount = (total * discount) / 100;
        return total - discountAmount;
    }

}
