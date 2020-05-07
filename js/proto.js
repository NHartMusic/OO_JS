function User(email, name) {
    this.email = email
    this.name = name
    this.online = false
}

User.prototype.login = function () {
    this.online = true
    console.log(this.email + ' has logged on')
}

User.prototype.logout = function () {
    this.online = false
    console.log(this.email + ' has logged off')
}

function Admin(...args) {
    User.apply(this, args)
    this.role = 'Biggest Boy In Town'
}

let userOne = new User('berniesandy@moveon.org', 'Big Boy')
let userTwo = new User('traitor@dnc.gov', 'Lizzie Warren')
var adminOne = new Admin('steveyboi@redscare.org', 'Steve Bannon')

console.log(adminOne)


