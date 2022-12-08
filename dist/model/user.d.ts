import { Model, Document } from 'mongoose';
export interface UserInput {
    fullname: string;
    email: string;
    password: string;
}
export interface UserDocument extends UserInput, Document {
    fullname: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
declare const _default: Model<Document<any, any, any>, any, any>;
export default _default;
