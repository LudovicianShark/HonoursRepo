import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";



@Component({
    selector: "Statistics",
    moduleId: module.id,
    templateUrl: "./statistics.component.html",
    styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {

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


}

