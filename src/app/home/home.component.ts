import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { View } from "tns-core-modules/ui/core/view";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { DatabaseService } from "~/database/sqlite.service";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    routerExtensions: any;
    constructor(
        private router: RouterExtensions,
    ){}

    ngOnInit(): void {
    }

    List() {
		this.router.navigate(["/mood_list"]);
    }

    add() {
		this.router.navigate(["/add_mood"]);
    }

    sign_out() {
		this.router.navigate(["/sign_in"]);
    }

    Home() {
		this.router.navigate(["/home"]);
    }

    Stats() {
		this.router.navigate(["/statistics"]);
    }

    Settings() {
		this.router.navigate(["/settings"]);
    }
}

