import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const existentUser = this.usersRepository.findById(user_id);

    if (!existentUser) {
      throw new Error("Informed user id not found!");
    }

    const modifiedUser = this.usersRepository.turnAdmin(existentUser);

    return modifiedUser;
  }
}

export { TurnUserAdminUseCase };
