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

  describe('validateUser', () => {

  })
});