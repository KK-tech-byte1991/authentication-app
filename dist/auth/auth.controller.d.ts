import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(username: string, password: string): Promise<{
        message: string;
    }>;
    register(username: string, password: string): Promise<{
        message: string;
    }>;
}
