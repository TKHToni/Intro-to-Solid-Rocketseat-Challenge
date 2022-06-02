import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    user.name = name;
    user.email = email;

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((userIterator) => userIterator.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(
      (userIterator) => userIterator.email === email
    );
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const userIndex = this.users.findIndex(
      (userIterator) => userIterator.id === receivedUser.id
    );
    this.users[userIndex].admin = true;
    this.users[userIndex].updated_at = new Date();

    return this.users[userIndex];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
