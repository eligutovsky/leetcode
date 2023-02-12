export const expect = (arg1: any, arg2: any) => {
    if (arg1 !== arg2) {
        throw new Error(`Actual value is ${arg1}, but expected is ${arg2}`);
    }
    console.info(`Passed. Actual: ${arg1}, Expected: ${arg2}`);
}