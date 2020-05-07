class User {
    constructor(email, name) {
        this.email = email
        this.name = name,
            this.score = 0
    }
    login() {
        console.log(this.email, ' in this thang thang')
        return this
    }
    logout() {
        console.log(this.email, ' out this bitch')
        return this
    }
    updateScore() {
        this.score++
        console.log(this.email, ' now has a score of', this.score)
        return this
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

let userOne = new User('ratmaster@rats.rat', 'Plat Rat')
let userTwo = new User('stringusbringus@gringus.edu', 'Daniel Dringus')
let adminOne = new Admin('bigbilly420@zagino.edu', 'Julia Rabkin')

let users = [userOne, userTwo, adminOne]

//method chaining
//userOne.login().updateScore().updateScore().logout() 

adminOne.deleteUser(userTwo)

console.log(users)



