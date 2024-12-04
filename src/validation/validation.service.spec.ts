import { Test, TestingModule } from '@nestjs/testing';
import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidationService],
    }).compile();

    service = module.get<ValidationService>(ValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('isValidEmail', () => {

    it('should be true if email is valid', () => {
      expect(service.isValidEmail("test@gmail.com")).toBe(true);
    });

    it('should be false if email is not valid', () => {
      expect(service.isValidEmail("test.com")).toBe(false);
    });

    it('should be false if email is not string', () => {
      expect(service.isValidEmail(null)).toBe(false);
    });


  })

  describe('isPalindrome', () => {

    it('should be true if palindrome', () => {
      expect(service.isPalindrome("kayak")).toBe(true);
    });

    it('should be false if not palindrome', () => {
      expect(service.isPalindrome("kaya")).toBe(false);
    });

    it('should be true if palindrome no matter the case', () => {
      expect(service.isPalindrome("Kayak")).toBe(true);
    });

    it('should be true if palindrome even if sentence', () => {
      expect(service.isPalindrome("nurses run")).toBe(true);
    });

    it('should throw if empty string', () => {
      expect(() => service.isPalindrome("")).toThrow('Input must be a string');
    });

  })


});
