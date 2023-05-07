import * as yub from "yup";

export const nameSchema = yub.object().shape({
  name: yub.string().required(),
});
export const emailSchema = yub.object().shape({
  email: yub.string().email().required(),
});

export const passwordSchema = yub.object().shape({
  password: yub.string().min(8).max(50).required(),
});
