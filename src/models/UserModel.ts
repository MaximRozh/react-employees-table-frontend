export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fullName?: string;
}

export type LoginUserType = Omit<UserModel, "firstName" | "lastName">;
