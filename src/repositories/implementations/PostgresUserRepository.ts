import { IUserRepository } from "../IUserRepository";

// Pure simulation here
import { User } from "../../entities/User";

export class PostgresUserRepository implements IUserRepository {
  private users: User[] = [];
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user as User;
  }
  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
