import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Mood_ListComponent } from "./mood_list.component";

const routes: Routes = [
    { path: "", component: Mood_ListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class Mood_ListRoutingModule { }
