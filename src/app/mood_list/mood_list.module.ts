import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Mood_ListRoutingModule } from "./mood_list.routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { Mood_ListComponent } from "./mood_list.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        Mood_ListRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        Mood_ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],

})
export class Mood_ListModule { }
