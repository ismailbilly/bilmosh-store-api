import UserModel, { UserInput } from "../models/user.model";
import logger from "../../logging/logger";
import httpStatus from "http-status-codes";
import { omit } from "lodash";
export async function registerUser(input: UserInput) {
  let result = {};
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (error) {
    logger.error(error, "Error in signup Service");
    result = {
      httpStatus: httpStatus.BAD_REQUEST,
      status: "failed",
      errorDetails: error,
    };
    return result;
  }
}
