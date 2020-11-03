// Task 1

const concat = (a: string, b: string) =>{
    return a + b;
}
console.log(concat('HEllo, ', 'World'));


// Task 2

type tArray = (string | number);
type tArray2 = ({howIDoIt: string, simeArray: (string | number)[]})

interface objInterface {
    howIDoIt: string,
    simeArray: tArray[],
    withData: tArray2[]
}

const MyHometask: objInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 23],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

console.log(MyHometask);



// Task 3

let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);

interface MyArray<T> {
	[N: number]: T;

	reduce(fn: (el: T, el2: T) => T): T;
}

const tsArr: MyArray<number> = [5, 2, 5, 8];

const res = tsArr.reduce((a, b) => a + b);
console.log(res);
