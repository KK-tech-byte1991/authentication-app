import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from 'src/users/users.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.userModel.findOne({ username }).exec();
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async createUser(username: string, password: string): Promise<User> {
        console.log("Hiiii")
        const user = new this.userModel({ username, password });
        return user.save();
    }
}
