import { toCapitalizeFirstLetter } from "./toCapitalizeFirstLetter";

describe('toCapitalizeFirstLetter', () =>{
    test('Должен принимать один аргумент "str", и должен сделать его первую букву заглавной на выходе', () =>{
        const str = toCapitalizeFirstLetter('hello world');

        expect(str).toEqual('Hello world')
    })
})