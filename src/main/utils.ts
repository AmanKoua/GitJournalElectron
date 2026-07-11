
export const assert = (cond: boolean, msg: string) => {
    if (!cond) {
        throw new Error(msg)
    }
}
