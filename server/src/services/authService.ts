import { UserService } from "./userService";
import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";

export class AuthService {
  private userService: UserService;
  private jwtSecret: Secret;
  private jwtExpiresIn: SignOptions["expiresIn"];
  constructor({
    expireTime = "1h",
  }: {
    expireTime?: SignOptions["expiresIn"];
  } = {}) {
    this.userService = new UserService();
    this.jwtSecret = process.env.JWT || "your_jwt_secret_key";
    this.jwtExpiresIn = expireTime;
  }
  async login(email: string, password: string) {
    try {
      const user = await this.userService.getUserByEmail(email);
      if (!user) {
        throw new Error("User not found");
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign(
        { userName: user.userName, email: user.userEmail },
        this.jwtSecret,
        {
          expiresIn: this.jwtExpiresIn,
        },
      );
      return { userName: user.userName, token };
    } catch (error: any) {
      throw new Error(`Error logging in: ${error?.message}`);
    }
  }
}
