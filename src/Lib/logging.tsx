import { exception } from "console"

export enum LOG_LEVEL {
    INFO = 0,
    DEBUG = 1,
    ERROR = 2,
    XHR_REQ = 3,
}
export const dLog = (level: number = LOG_LEVEL.INFO, ...rest: any): void => {
    if (level! in LOG_LEVEL)
        throw exception("invalid log level expected one of " + LOG_LEVEL)
}