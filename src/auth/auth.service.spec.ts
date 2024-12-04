import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findUserByUsername: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return true for valid username and password', () => {
      // Arrange
      // const mockUser = { username: 'john', password: 'password123' };
      jest.spyOn(userService, 'findUserByUsername').mockReturnValue({ username: 'john', password: 'password123' });
  
      // Act
      const isValid = service.validateUser('john', 'password123');
  
      // Assert
      expect(isValid).toBe(true);
      expect(userService.findUserByUsername).toHaveBeenCalledWith('john');
  });
  
    it('should return false for invalid password', () => {
      // Arrange
      const mockUser = { username: 'john', password: 'password123' };
      jest.spyOn(userService, 'findUserByUsername').mockReturnValue(mockUser);
  
      // Act
      const isValid = service.validateUser('john', 'wrongpassword');
  
      // Assert
      expect(isValid).toBe(false);
      expect(userService.findUserByUsername).toHaveBeenCalledWith('john');
    });
  
    it('should return false for non-existent username', () => {
      // Arrange
      jest.spyOn(userService, 'findUserByUsername').mockReturnValue(null);
  
      // Act
      const isValid = service.validateUser('unknown', 'password123');
  
      // Assert
      expect(isValid).toBe(false);
      expect(userService.findUserByUsername).toHaveBeenCalledWith('unknown');
    });
  })
});
