export default async function checkInput(number, input) {
    const n = parseInt(number);
    const i = parseInt(input);
    const isValid = (n + n) === i;
    let result = await new Promise((res, reject) => {
        setTimeout(() => res(isValid), 1000);
    })
    console.log('result', result);
    
    return result;
}