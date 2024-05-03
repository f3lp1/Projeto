import { CreateUserDTO } from "../src/modules/users/dtos/createUserDTO";

describe('CreateUserDTO', () => {
  it('should define correct types for email, name, and password', () => {
    const createUserDTO: CreateUserDTO = {
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
    };
    
    expect(typeof createUserDTO.email).toBe('string');
    expect(typeof createUserDTO.name).toBe('string');
    expect(typeof createUserDTO.password).toBe('string');
  });
});
