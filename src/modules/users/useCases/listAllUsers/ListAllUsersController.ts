import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = String(user_id);

    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(allUsers);
    } catch (error) {
      // This way the error will be sent through the body
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
