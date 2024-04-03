import { mode } from "./constants";

export type Theme = (typeof mode)[keyof typeof mode];