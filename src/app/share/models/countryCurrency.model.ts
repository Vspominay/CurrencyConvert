import { Flag } from "./flag.model";

export interface CountryCurrency {
    flag: Flag,
    code: string,
    country?: string,
}
