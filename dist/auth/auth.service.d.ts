import { Model } from 'mongoose';
import { UserDocument, User } from 'src/users/users.schema';
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    validateUser(username: string, password: string): Promise<User | null>;
    createUser(username: string, password: string): Promise<User>;
}
