import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const user = await this.authService.validateUser(username, password);
    if (user) {
      // Generate and return a token or perform any necessary authentication logic
      return { message: 'Authentication successful' };
    } else {
      // Handle authentication failure
      return { message: 'Invalid credentials' };
    }
  }

  @Post('register')
  async register(@Body('username') username: string, @Body('password') password: string) {    
    const user = await this.authService.createUser(username, password);
    // Perform any necessary actions after registration
    return { message: 'Registration successful' };
  }
}
