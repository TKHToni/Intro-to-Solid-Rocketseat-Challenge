import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const modifiedUser = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).send(modifiedUser);
    } catch (error) {
      // This way the error will be sent through the body
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
