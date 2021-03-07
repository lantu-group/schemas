import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  ADMIN = 'admin', // 管理员
  GUEST = 'guest', // 游客
  MERCHANT = 'merchant', // 商家
}

export enum UserState {
  NORMAL = 'normal', // 正常
  FREEZE = 'freeze', // 冻结
}
@Schema()
export class User {
  @Prop({ require: true, type: Number })
  id?: number;

  @Prop({ require: false, type: String })
  email?: string;

  @Prop({ require: true, type: String })
  password!: string;

  @Prop({ require: true, type: String })
  phoneArea?: string;

  @Prop({ require: false, type: String })
  nickname?: string;

  @Prop({ require: true, type: String })
  salt!: string;

  @Prop({ require: true, type: Array })
  roles!: Role[];

  @Prop({ require: true, default: UserState.NORMAL, type: String })
  state!: UserState;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
