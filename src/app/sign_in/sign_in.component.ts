import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";



@Component({
    selector: "Sign_In",
    moduleId: module.id,
    templateUrl: "./sign_in.component.html",
    styleUrls: ["./sign_in.component.css"]
})
export class Sign_InComponent implements OnInit {
    routerExtensions: any;
    uname ="";
    password="";


    constructor(
        private router: RouterExtensions,
    ){}

    ngOnInit(): void {
    }

    Sign_In() {
        if (this.uname.trim() === "JaneDoe22") {
            alert("Username and/or password is incorrect. Please try again.");
            return;
        }
        else if (this.password.trim() === "darksouls") {
            alert("Username and/or password is incorrect. Please try again.");
            return;
        }
		else this.router.navigate(["/home"]);
    }

    sign_out() {
		this.router.navigate(["/sign_in"]);
    }

    add() {
		this.router.navigate(["/add_mood"]);
    }


}

