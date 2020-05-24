import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { Add_MoodComponent } from "./add_mood.component";

const routes: Routes = [
    { path: "", component: Add_MoodComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class Add_MoodRoutingModule { }
