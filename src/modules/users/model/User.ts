import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.admin = false;
    const timeInstant = new Date();
    this.created_at = timeInstant;
    this.updated_at = timeInstant;
  }
}

export { User };
