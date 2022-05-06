
class bid {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }

    close () {
        this.disconnect();
    }

    async getArtists () {
        const results = await this.DBQuery("SELECT * FROM Artist");
        return results;
    }
}

module.exports = bid;