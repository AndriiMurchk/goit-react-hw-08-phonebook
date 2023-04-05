import { object, string } from 'yup';

const phoneRegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const contactSchema = object({
  name: string().required(),
  number: string().min(5).matches(phoneRegExp, "Invalid phone number").required(),
});

export const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(7),
});

export const registerSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required().min(7),
});