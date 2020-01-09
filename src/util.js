
export function addNumber (a, b) {
    if(typeof a !== Number || typeof b !== Number) return Number(a) + Number(b);
    else return a + b;
}