class MongoDB {
    static findById(id) {
        console.log("Appel à mongoDB")
        return {id, name : "Jean"}
    }
}

module.exports = MongoDB