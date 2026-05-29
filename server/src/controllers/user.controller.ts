import { UserService } from "../services/userService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: any, res: any) {
    try {
      const userData = req.body;
      const newUser = await this.userService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }

  async getUserByEmail(req: any, res: any) {
    try {
      const email = req.query.email;
      const user = await this.userService.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }

  async getUserById(req: any, res: any) {
    try {
      const userId = req.query.userId;
      const user = await this.userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }
}
