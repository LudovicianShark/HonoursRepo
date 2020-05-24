import { Component } from "@angular/core";
import { DatabaseService } from "~/database/sqlite.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private database: DatabaseService) {
        this.database.getdbConnection()
            .then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS moods (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, time TEXT, mood INTEGER, activity TEXT, desc TEXT )").then(() => {
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                    });
            });
    }


}
