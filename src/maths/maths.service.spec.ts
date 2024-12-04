import { Test, TestingModule } from '@nestjs/testing';
import { MathsService } from './maths.service';
import { LoggerService } from '../logger/logger.service';

describe('MathsService', () => {
  let mathService: MathsService;
  let loggerService: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MathsService
      ],
    }).compile();

    mathService = module.get<MathsService>(MathsService);
    loggerService = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(mathService).toBeDefined();
  });

  describe('addition', () => {

    it('should return the correct sum of two positive numbers', () => {
      expect(mathService.addition(2, 3)).toBe(5);
    });

    it('should return the correct sum of a negative and a positive number', () => {
      expect(mathService.addition(-1, 1)).toBe(0);
    });

    it('should return the correct sum of two zeros', () => {
      expect(mathService.addition(0, 0)).toBe(0);
    });

    it('should log the sum of two numbers', () => {
      // Act
      mathService.addition(2, 3);
  
      // Assert
      expect(loggerService.log).toHaveBeenCalledWith('Addition: 2 + 3 = 5');
    });
    
  });

  describe('multiply', () => {
    it('should return the product of two positive numbers', () => {
      // Arrange
      const a = 3;
      const b = 5;

      // Act
      const result = mathService.multiply(a, b);

      // Assert
      expect(result).toBe(15);
    });

    it('should return 0 when multiplying any number by 0', () => {
      // Arrange
      const a = 42;
      const b = 0;
    
      // Act
      const result = mathService.multiply(a, b);
    
      // Assert
      expect(result).toBe(0);
    });

    it('should throw an error when multiplying with a negative number', () => {
      // Arrange
      const a = -3;
      const b = 5;

      // Act & Assert
      expect(() => mathService.multiply(a, b)).toThrow('Negative numbers are not allowed');
    });

    it('should log the product of two numbers', () => {
      // Act
      mathService.multiply(4, 5);
  
      // Assert
      expect(loggerService.log).toHaveBeenCalledWith('Multiply: 4 * 5 = 20');
    });

  });
});
