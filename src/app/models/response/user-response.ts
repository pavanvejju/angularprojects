import { BaseResponse } from "../response/base-response";
import { User } from "../dto/user";


export class UserDetailsResponse extends BaseResponse {
    userDTO: User;
}