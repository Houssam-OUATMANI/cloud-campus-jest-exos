function addAge(age) {
    const user = MongoDB.findById(1)
    return {...user, age}
}

module.exports = addAge