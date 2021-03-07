"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = exports.UserState = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["GUEST"] = "guest";
    Role["MERCHANT"] = "merchant";
})(Role || (Role = {}));
var UserState;
(function (UserState) {
    UserState["NORMAL"] = "normal";
    UserState["FREEZE"] = "freeze";
})(UserState = exports.UserState || (exports.UserState = {}));
let User = class User {
};
__decorate([
    mongoose_1.Prop({ require: true, type: Number })
], User.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop({ require: false, type: String })
], User.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ require: true, type: String })
], User.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({ require: true, type: String })
], User.prototype, "phoneArea", void 0);
__decorate([
    mongoose_1.Prop({ require: false, type: String })
], User.prototype, "nickname", void 0);
__decorate([
    mongoose_1.Prop({ require: true, type: String })
], User.prototype, "salt", void 0);
__decorate([
    mongoose_1.Prop({ require: true, type: Array })
], User.prototype, "roles", void 0);
__decorate([
    mongoose_1.Prop({ require: true, default: UserState.NORMAL, type: String })
], User.prototype, "state", void 0);
User = __decorate([
    mongoose_1.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vbmdvL3Nzby91c2VyLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBK0Q7QUFHL0QsSUFBSyxJQUlKO0FBSkQsV0FBSyxJQUFJO0lBQ1AsdUJBQWUsQ0FBQTtJQUNmLHVCQUFlLENBQUE7SUFDZiw2QkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSkksSUFBSSxLQUFKLElBQUksUUFJUjtBQUVELElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiw4QkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEI7QUFFRCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFJO0NBd0JoQixDQUFBO0FBdEJDO0lBREMsZUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0NBQzFCO0FBR1o7SUFEQyxlQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzttQ0FDeEI7QUFHZjtJQURDLGVBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3NDQUNwQjtBQUdsQjtJQURDLGVBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3VDQUNuQjtBQUduQjtJQURDLGVBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3NDQUNyQjtBQUdsQjtJQURDLGVBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2tDQUN4QjtBQUdkO0lBREMsZUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7bUNBQ3RCO0FBR2Y7SUFEQyxlQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzttQ0FDL0M7QUF2QlAsSUFBSTtJQURoQixpQkFBTSxFQUFFO0dBQ0ksSUFBSSxDQXdCaEI7QUF4Qlksb0JBQUk7QUEyQkosUUFBQSxVQUFVLEdBQUcsd0JBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMifQ==