
class bid {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }

    close () {
        this.disconnect();
    }

    async getMerch () {
        const results = await this.DBQuery("SELECT * FROM Merch");
        return results;
    }
}

module.exports = bid;