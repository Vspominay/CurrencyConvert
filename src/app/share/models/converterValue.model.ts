import { Flag } from './flag.model';

export interface ConverterValue {
    flag: Flag,
    code: string,
    state?: boolean
    value?: number,
}
