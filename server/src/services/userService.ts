import User from "../models/user.schema";
import bcrypt from "bcryptjs";

export class UserService {
  async createUser(userData: any) {
    try {
      const hashPassword = await bcrypt.hash(userData.password, 10);
      const user = new User({ ...userData, password: hashPassword });
      return await user.save();
    } catch (error: any) {
      throw new Error(`Error creating user: ${error?.message}`);
    }
  }

  async getUserByEmail(email: string) {
    try {
      return await User.findOne({ userEmail: email });
    } catch (error: any) {
      throw new Error(`Error fetching user by email: ${error?.message}`);
    }
  }

  async getUserById(userId: string) {
    try {
      return await User.findOne({ userId });
    } catch (error: any) {
      throw new Error(`Error fetching user by ID: ${error?.message}`);
    }
  }
}
