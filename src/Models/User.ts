export interface IUser {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar: null | {
    url: string;
  };
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
