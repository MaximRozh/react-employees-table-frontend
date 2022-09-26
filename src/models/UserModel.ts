export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fullName?: string;
}
export interface UserSingResponseModel extends Omit<UserModel, "password"> {
  _id: string;
  token: string;
  updatedAt: string;
  createdAt: string;
}

export type LoginUserType = Omit<UserModel, "firstName" | "lastName">;
