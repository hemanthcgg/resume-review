import { AuthService } from "../services/authService";

export class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  async login(req: any, res: any) {
    try {
      const { email, password } = req.body;
      const { userName, token } = await this.authService.login(email, password);
      res.status(200).json({ userName, token });
    } catch (error: any) {
      res.status(401).json({ error: error?.message || "Unauthorized" });
    }
  }
}
