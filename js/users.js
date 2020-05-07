// const userOneEmail = 'joebiden69@rnc.edu'
// const userOneName = 'Uncle Joe'
// const userOneFriends = ['Donald Trump', 'Hillary Clinton']

//object literal version 

const userOne = {
    email: 'joebiden69@rnc.edu',
    name: 'Uncle Joe',
    friends: [
        'Donald Trump',
        'Hillary Clinton'
    ],
    login() {
        console.log(this.email, ' has entered the void')
    },
    logout() {
        console.log(this.email, ' has dipped tf out of this bitch')
    }
}

console.log(userOne.name)


const userTwo = {
    email: 'hilldog@epstein.com',
    name: 'Hil Clint',
    friends: [
        'Billy Boy Clinton',
        'Henry Kissinger'
    ]
}

const userThree = {
    email: 'joebiden69@rnc.edu',
    name: 'Uncle Joe',
    friends: [
        'Donald Trump',
        'Hillary Clinton'
    ]
}



function logFriends() {
    friends.forEach(friend => {
        console.log(friend)
    })
}

//login(userOneEmail)