export type User = {
  id: number;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};
