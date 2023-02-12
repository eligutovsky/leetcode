enum Colors {
    Red = '\x1b[31m',
    Green = '\x1b[32m',
    Yellow = '\x1b[33m',
    Blue = '\x1b[34m',
}

const colorize = (text: string, color: Colors) => {
    return `${color}${text}\x1b[0m`;
}

export const expect = (arg1: any, arg2: any) => {
    if (arg1 !== arg2) {
        console.error(colorize(`Failed. Actual: ${arg1}, Expected: ${arg2}`, Colors.Red));
    }
    console.info(colorize(`Passed. Actual: ${arg1}, Expected: ${arg2}`, Colors.Green));
}