class User {
    constructor(email, name) {
        this.email = email
        this.name = name
    }
    login() {
        console.log(this.email, ' in this thang thang')
    }
    logout() {
        console.log(this.email, ' out this bitch')
    }
}

let userOne = new User('ratmaster@rats.rat', 'Plat Rat')
let userTwo = new User('stringusbringus@gringus.edu', 'Daniel Dringus')

userOne.login()
userTwo.login()