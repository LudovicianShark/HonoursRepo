import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";



@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
    routerExtensions: any;

    constructor(
        private router: RouterExtensions,
    ){}

    ngOnInit(): void {
    }

    Sign_In() {
		this.router.navigate(["/home"]);
    }

    sign_out() {
		this.router.navigate(["/sign_in"]);
    }

    add() {
		this.router.navigate(["/add_mood"]);
    }

    Stats() {
		this.routerExtensions.navigate(["/statistics"]);
    }

    Home() {
		this.router.navigate(["/home"]);
    }

    Settings() {
		this.router.navigate(["/settings"]);
    }


}

