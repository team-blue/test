'use strict';
// omi-faker = classes designed to easily morph between ledger and database uses


// const sqljson = require('sql-to-json');


class instance {

  constructor(database, user, key) {
    this.database = database
    this.user = user
    this.key = key
  }




  registerArtist(artist, labels, songs, platforms) {
    console.log("Registering " + artist + " to the database.")

    if (this.database[artist] == undefined) {
      this.database[artist] = {}
    }

    this.database[artist]["Label(s)"] = labels
    this.database[artist]["Song(s)"] = songs
    this.database[artist]["Platform(s)"] = platforms
  }



  // return an artist
  getArtist(artist) {
    return JSON.stringify(this.database[artist],null,2)
    // "name": "String", // a Unique name; the natural key
    // "IPI": "International Parties Information", // may be null
    // "ISNI": "International Standard Name Identifier", // may be null
    // "street_address": "street address for payments", // may be null
  }

  // return list of artists (names only)
  getArtists() {
    return Object.keys(this.database)
  }

}




module.exports = {
  instance
}
