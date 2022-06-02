import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const foundUser = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).json(foundUser);
    } catch (error) {
      // This way the error will be sent through the body
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
