import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { View } from "tns-core-modules/ui/core/view";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { DatabaseService } from "~/database/sqlite.service";


@Component({
    selector: "Mood_List",
    moduleId: module.id,
    templateUrl: "./mood_list.component.html",
    styleUrls: ["./mood_list.component.css"]
})
export class Mood_ListComponent implements OnInit {
    moodList: Array<Object> = [];
    db: any;
    date ="";
    time ="";
    mood = "";
    activity="";
    desc="";
    @ViewChild("dateTextField", {static: false}) dateTextField: ElementRef;
    @ViewChild("timeTextField", {static: false}) timeTextField: ElementRef;
    @ViewChild("moodTextField", {static: false}) moodTextField: ElementRef;
    @ViewChild("activityTextField", {static: false}) activityTextField: ElementRef;
    @ViewChild("descTextField", {static: false}) descTextField: ElementRef;
    router: any;

    constructor(
        private routerExtensions: RouterExtensions,
        private database: DatabaseService
    ){}


    ngOnInit(): void {
        this.SqlSelectItems();
    }

    SqlSelectItems() {
        this.moodList = [];
        this.database.getdbConnection().then(db => {
            db.all("SELECT * FROM moods").then(rows => {
                for (var row in rows) {
                    this.moodList.push({ id: rows[row][0], date: rows[row][1], time: rows[row][2], mood: rows[row][3], activity: rows[row][4], desc: rows[row][5] });
                }
                this.db = db;
            }, error => {
                console.log("SQL SELECT ERROR", error);
            });
        });
    }

    onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById<View>("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    delete(args: ListViewEventData) {
		let mood = <any>args.object.bindingContext;
		this.db.execSQL("DELETE FROM moods WHERE id=?", [mood.id]).then(() => {
            let index = this.moodList.indexOf(mood);
            alert("Entry deleted!")
			this.moodList.splice(index, 1);
			console.log(" Item deleted successfully!")
		});
    }

    add() {
		this.routerExtensions.navigate(["/add_mood"]);
    }

    sign_out() {
		this.routerExtensions.navigate(["/sign_in"]);
    }

    Home() {
		this.routerExtensions.navigate(["/home"]);
    }
}
