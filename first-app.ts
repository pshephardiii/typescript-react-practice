let userName: string = 'Max'

userName = 'John'

// Union types

let userID: string | number
userID = 'john'
userID = 123

// Object types

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}
user = {
    name: 'Max',
    age: 34,
    isAdmin: true,
    id: 'abc'
}

// Array types

let hobbies: Array<string>

// shortcut --- let hobbies: string[]

hobbies = ['Sports', 'Cooking', 'Reading']

// Adding types to functions

function add(a: number, b: number) {
    let result = a + b
    return result
}

// adding a return value type

function subtract(a: number, b: number): number {
    let result = a - b
    return result
}

// when a function isn't meant to return anything
// void is used where there is no data

function addLog(a: number, b: number): void {
    let result = a + b
    console.log(result)
}

// defining function types
// calcFn is being set as a function type with the function expression syntax

function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
    calcFn(a, b)
}

calculate(2, 5, add)

// custom types when type definitions get too long

type AddFn = (a: number, b: number) => number

function calculateShort(a: number, b: number,  calcFn: AddFn) {
    calcFn(a, b)
}

// custom types can be used for object types

// defining object types with interfaces:

interface Credentials {
    password: string;
    email: string;
}

// you can update the interface further downt he line:

interface Credentials {
    mode: string;
}

let creds: Credentials

creds = {
    password: 'abc',
    email: 'paul@paul.com',
    mode: 'power'
}

// interfaces vs custom types:

// you can always use the type keyword
// interface is more limited and is used only for object types
// however, when using a class you can use implements keyword to implement an interface
// this is called implementing a class contract
// public members can be accessed from anywhere inside or outside of the class

class AuthCredentials implements Credentials {
    constructor(public password: string, public email: string, public mode: string, public username: string){}
}

function login(credentials: Credentials) {
    console.log(credentials)
}

login(new AuthCredentials('hoho', 'paul@paul.com', 'power', 'paulboy'))

// merging types:

type Admin = {
    permissions: string[]
}

type AppUser = {
    userName: string
}

type AppAdmin = Admin & AppUser

let admin: AppAdmin

admin = {
    permissions: ['login'],
    userName: 'Max'
}

// can also do it with interfaces
// interface Admin {permissions: string[]}
// interface AppUser {userName: string}
// interface AppAdmin extends Admin { *** optional... add additional properties *** }
// let addmin: AppAdmin
// admin = {permissions: ['login'], userName: 'Max'}

// literal types:

// role can only be set to particular values 
let role: 'admin' | 'user' | 'editor'     // 'admin' or 'user' or 'editor'

role = 'user'

// adding type guards:

type Role = 'admin' | 'user' | 'editor'

function perfromAction(action: string, role: Role) {

}

// Generic Types:

// built in generic type:
let roles: Array<Role>

// generic types are types that work together with another type:
// custom generic types:

// placeholder type is 'T'... you can add multiple placeholders, like 'U'
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void
}

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data)
    }
}

type User = {
    name: string;
    password: string;
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {
        this.storage.push(user)
    }
}

// generic function:

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}

const newUser = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 34})

