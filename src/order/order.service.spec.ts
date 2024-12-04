import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { DiscountService } from '../discount/discount.service';

describe('OrderService', () => {
  let orderService: OrderService;
  let discountService: DiscountService;

  beforeEach(async () => {
    const mockDiscountService = {
      isValidDiscount: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: DiscountService, useValue: mockDiscountService },
      ],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
    discountService = module.get<DiscountService>(DiscountService);
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });

  describe('calculateTotal', () => {

    it('should validate the discount', () => {
      // Arrange
      const products = [{ price: 100 }];
      const discount = 20;
    
      jest.spyOn(discountService, 'isValidDiscount').mockReturnValue(true);
    
      // Act
      const total = orderService.calculateTotal(products, discount);
    
      // Assert
      expect(discountService.isValidDiscount).toHaveBeenCalledWith(discount);
      expect(total).toBe(80); // Total = 100 - 20% de 100
    });


    it('should throw an error for a discount less than 0', () => {
      expect(() => orderService.calculateTotal([{ price: 100 }], -5)).toThrow(
        'Invalid discount value',
      );
    });
    
    it('should throw an error for a discount greater than 100', () => {
      expect(() => orderService.calculateTotal([{ price: 100 }], 105)).toThrow(
        'Invalid discount value',
      );
    });

  })
});