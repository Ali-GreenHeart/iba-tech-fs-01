// // // // // // keyword
// // // // // // Task1: Create a Product type. The properties are: 
// // // // // /* name, model, price, store :Store*/
// // // // // // Store: name, location

// // // // // type Product = {
// // // // //     name: string;
// // // // //     model: string;
// // // // //     price: number;
// // // // //     store: Store;
// // // // // }
// // // // // type Store = {
// // // // //     name: string;
// // // // //     location: {
// // // // //         lat: string;
// // // // //         lng: string;
// // // // //     }
// // // // // }

// // // // // type evenDigits = 0 | 2 | 4 | 6 | 8
// // // // // type oddDigits = 1 | 3 | 5 | 7 | 9


// // // // // const myPhone: Product = {
// // // // //     name: "iPhone",
// // // // //     model: "15 Pro Max",
// // // // //     price: 1199,
// // // // //     store: {
// // // // //         name: "Aliaska mmc",
// // // // //         location: {
// // // // //             lat: "41.986",
// // // // //             lng: "42.897"
// // // // //         }
// // // // //     }
// // // // // }

// // // // // type Sinif = number | string | boolean | null;
// // // // // type Cins = "K" | "Q"
// // // // // type Student = {
// // // // //     ad: string;
// // // // //     sinif?: Sinif;
// // // // //     cins: Cins;
// // // // //     car?: string;
// // // // // }

// // // // // const ali: Student = {
// // // // //     ad: 'ali',
// // // // //     cins: "K"
// // // // // }

// // // // // ali.sinif = '11a'



// // // // // string[] | number[]
// // // // // (string|number)[]
// // // // // const arr: (string | number)[] = ["ali", "greenheart", "alion"]

// // // // // arr.push("ali2")
// // // // // arr.push(12)


// // // // // interface: OOP
// // // // // class

// // // // // class Mehsul {
// // // // //     name = ''
// // // // //     brand = ''
// // // // //     constructor(name: string) {
// // // // //         this.name = name
// // // // //     }
// // // // // }
// // // // // const honor = new Mehsul('Honor')
// // // // // honor.brand = 'MagicBook'

// // // // // interface Product {
// // // // //     name: string;
// // // // //     model?: string;
// // // // //     price: number;
// // // // //     store: Store;
// // // // // }

// // // // // type Product = {
// // // // //     name: string;
// // // // //     model: string;
// // // // //     price: number;
// // // // //     store: Store;
// // // // // }

// // // // // type Store = {
// // // // //     name: string;
// // // // //     location: {
// // // // //         lat: string;
// // // // //         lng: string;
// // // // //     }
// // // // // }




// // // // // tuple

// // // // // [ "ali" ,12, "front" ]

// type Job = "front" | "back" | "full" | "ML" | "AI"
// // // // type StudentTuple = [string, number, Job]
// // // // const student: StudentTuple = ["ali", 12, "ML"]

// // // // const student2: StudentTuple = ["cavid", 23, "front"]


// // // interface Product extends Owner {
// // //     name: string;
// // //     model?: string;
// // //     price: number;
// // // }
// // // // owner
// // // interface Store extends Owner {
// // //     name: string;
// // //     location: string;
// // // }

// // // interface Owner {
// // //     ownerName: string;
// // //     ownerAge: number;
// // //     ownerJob?: Job;
// // // }


// // // const kontaktHome: Store = {
// // //     name: "ahmadli branch",
// // //     location: "ahmadli",
// // //     ownerName: "ali",
// // //     ownerAge: 23
// // // }

// // enum Directions {
// //     Left,
// //     Up,
// //     Right,
// //     Down
// // }
// // enum HttpStatusCode {
// //     Success = 200,
// //     Unauthorized = 401,
// //     Forbidden = 403,
// //     NotFound = 404
// // }
// // console.log(HttpStatusCode.Success)

// // // redux actions
// // enum CounterActions {
// //     Increment,
// //     Decrement,
// //     Reset,
// //     Special
// // }
// // const action =  {type:CounterActions.Increment}

// // if(action.type ===  CounterActions.Increment){

// // }

// enum CarTypes {
//     OffRoad,
//     Sedan,
//     Coupe,
//     Limousine
// }
// interface IOwner {
//     ownerName: string;
//     ownerAge: number;
//     ownerJob?: Job;
// }
// interface IFactory extends IOwner {
//     name: string;
//     location: string;
//     country: string;
// }
// // konvensiya
// interface ICar extends IOwner {
//     brand: string;
//     type: CarTypes;
//     factory: IFactory;
// }

// const car: ICar = {
//     brand: "",
//     type: CarTypes.Limousine,
//     factory: {
//         name: "",
//         location: "",
//         country: "",
//         ownerName: "",
//         ownerAge: 0
//     },
//     ownerName: "",
//     ownerAge: 0
// }


// function
// type Func = (a: number, b: number) => number;

// const sum: Func = (a: number, b: number) => {
//     return "salam"
// }

// console.log(sum(12, 23))



// function multiply(a: number): number {
//     return a;
// }



// interface IProps {
//     name: string;
//     age: number;
// }

// const showInfo = ({ name, age }: IProps) => {
//     console.log(`Hi, My name is ${name}, I'm ${age} years old. `)
// }



// class Person {
//     private name = ''
//     constructor(name: string) {
//         this.name = name
//     }
// }

// const ali = new Person("alion")

// console.log(ali.name)



// function getFirstItem<T>(arr: T[]): T {
//     return arr[0]
// }

// getLastItem

// const getFirstItem = <T>(arr: T[]): T => arr[0]
// const getLastItem = <T>(arr: T[]): T => arr[arr.length - 1]

// console.log(getFirstItem<number>([1, 2, 3, 4, 5]))
// console.log(getFirstItem<string>(['ali', 'ahmad', 'parviz']))
// console.log(getFirstItem<{ ad: string }>([{ ad: 'ali' }, { ad: 'ahmad' }]))


interface IUser {
    id: string | number;
    username: string;
    age: number;
}
const BASE_URL = `https://jsonplaceholder.typicode.com`

async function fetchApi<T>(url: string): Promise<T> {
    const resp = await fetch(url)
    return resp.json()
}

async function getUsers() {
    const users = await fetchApi<IUser[]>(`${BASE_URL}/users`)
    console.log(users[0])
}

getUsers()


// interface IProduct {
//     id: number;
//     name: string;
// }
// async function getProductById(id: number) {
//     const products = await fetchApi<IProduct>(`https://some url/products/${id}`)
// }
