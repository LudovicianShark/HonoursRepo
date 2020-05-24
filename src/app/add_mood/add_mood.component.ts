import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { View } from "tns-core-modules/ui/core/view";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { action } from "tns-core-modules/ui/dialogs";
import { DatabaseService } from "~/database/sqlite.service";


@Component({
    selector: "Add_Mood",
    moduleId: module.id,
    templateUrl: "./add_mood.component.html",
    styleUrls: ["./add_mood.component.css"]
})
export class Add_MoodComponent implements OnInit {
    moodList: Array<Object> = [];
    db: any;
    date ="";
    time ="";
    mood = 0;
    activity="";
    desc="";
    @ViewChild("dateTextField", {static: false}) dateTextField: ElementRef;
    @ViewChild("timeTextField", {static: false}) timeTextField: ElementRef;
    @ViewChild("moodTextField", {static: false}) moodTextField: ElementRef;
    @ViewChild("activityTextField", {static: false}) activityTextField: ElementRef;
    @ViewChild("descTextField", {static: false}) descTextField: ElementRef;

    routerExtension: any;


    constructor(
        private router: RouterExtensions,
        private database: DatabaseService
    ){}

    ngOnInit(): void {
        this.SqlSelectItems();
    }

    List() {
		this.router.navigate(["/mood_list"]);
    }

    SqlSelectItems() {
        this.moodList = [];
        this.database.getdbConnection().then(db => {
            db.all("SELECT * FROM moods").then(rows => {
                for (var row in rows) {
                    this.moodList.push({ id: rows[row][0], date: rows[row][1], time: rows[row][2], mood: rows[row][3], activity: rows[row][4], desc: rows[row][5] });
                    console.log("SQL SUCCESSFULLY CREATED");
                }
                this.db = db;
            }, error => {
                console.log("SQL SELECT ERROR", error);
            });
        });
    }

    addMood() {
        if (this.date.trim() === "") {
            alert("Please enter the current date");
            return;
        }
        else if(this.time.trim() ==="") {
            alert("Please enter the current time");
            return;
        }
        else if(this.activity.trim() ==="") {
            alert("Please enter your current activity");
            return;
        }
        else if(this.desc.trim() ==="") {
            alert("Please enter the current description");
            return;
        }

        let DateTextField = <TextField>this.dateTextField.nativeElement;
        let TimeTextField = <TextField>this.timeTextField.nativeElement;
        let MoodTextField = <TextField>this.moodTextField.nativeElement;
        let ActivityTextField = <TextField>this.activityTextField.nativeElement;
        let DescTextField = <TextField>this.descTextField.nativeElement;

        DateTextField.dismissSoftInput();
        TimeTextField.dismissSoftInput();
        MoodTextField.dismissSoftInput();
        ActivityTextField.dismissSoftInput();
        DescTextField.dismissSoftInput();

		this.db.execSQL(
            "INSERT INTO moods (date, time, mood, activity, desc) VALUES (?, ?, ?, ?, ?)",
            [this.date, this.time, this.mood, this.activity, this.desc]).then(id => {
			this.moodList.unshift({ id: id, date: this.date, time: this.time, mood: this.mood, activity: this.activity, desc: this.desc });
            this.date = "";
            this.time = "";
            this.mood = 0;
            this.activity = "";
            this.desc = "";
		}, error => {
			alert('An error occurred while adding an mood to your diary.');
			this.date = "";
            this.time = "";
            this.mood = 0;
            this.activity = "";
            this.desc = "";
        });
        alert("Mood Successfully Recorded")

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
            this.moodList.splice(index, 1);
			console.log(" Item deleted successfully!")
		});
    }

    add() {
        this.routerExtension.navigate(["/add_mood"]);

    }

    Home() {
		this.router.navigate(["/home"]);
    }
}

