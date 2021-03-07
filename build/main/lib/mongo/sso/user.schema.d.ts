import { Document, Schema as MSchema } from 'mongoose';
export declare enum Role {
    ADMIN = "admin",
    GUEST = "guest",
    MERCHANT = "merchant"
}
export declare enum UserState {
    NORMAL = "normal",
    FREEZE = "freeze"
}
export declare class User {
    id?: number;
    email?: string;
    password: string;
    phoneArea?: string;
    nickname?: string;
    salt: string;
    roles: Role[];
    state: UserState;
}
export declare type UserDocument = User & Document;
export declare const UserSchema: MSchema;
