import { Injectable } from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {

    public getdbConnection() {
        return new Sqlite('moods');
    }

    public closedbConnection() {
        new Sqlite('moods')
            .then((db) => {
                db.close();
            })
    }
}
