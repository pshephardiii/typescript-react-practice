var userName = 'Max';
userName = 'John';
// Union types
var userID;
userID = 'john';
userID = 123;
// Object types
var user;
user = {
    name: 'Max',
    age: 34,
    isAdmin: true,
    id: 'abc'
};
// Array types
var hobbies;
// shortcut --- let hobbies: string[]
hobbies = ['Sports', 'Cooking', 'Reading'];
// Adding types to functions
function add(a, b) {
    var result = a + b;
    return result;
}
// adding a return value type
function subtract(a, b) {
    var result = a - b;
    return result;
}
// when a function isn't meant to return anything
// void is used where there is no data
function addLog(a, b) {
    var result = a + b;
    console.log(result);
}
// defining function types
// calcFn is being set as a function type with the function expression syntax
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add);
function calculateShort(a, b, calcFn) {
    calcFn(a, b);
}
var creds;
creds = {
    password: 'abc',
    email: 'paul@paul.com',
    mode: 'power'
};
// interfaces vs custom types:
// you can always use the type keyword
// interface is more limited and is used only for object types
// however, when using a class you can use implements keyword to implement an interface
// this is called implementing a class contract
// public members can be accessed from anywhere inside or outside of the class
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials(password, email, mode, username) {
        this.password = password;
        this.email = email;
        this.mode = mode;
        this.username = username;
    }
    return AuthCredentials;
}());
function login(credentials) {
    console.log(credentials);
}
login(new AuthCredentials('hoho', 'paul@paul.com', 'power', 'paulboy'));
