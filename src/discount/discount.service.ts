import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService {

    isValidDiscount(discount: number): boolean {
        return discount >= 0 && discount <= 100;
    }

}
