import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const existentUser = this.usersRepository.findById(user_id);

    if (!existentUser) {
      throw new Error("Informed user not found!");
    }

    return existentUser;
  }
}

export { ShowUserProfileUseCase };
