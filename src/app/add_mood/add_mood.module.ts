import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Add_MoodRoutingModule } from "./add_mood.routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { Add_MoodComponent } from "./add_mood.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        Add_MoodRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        Add_MoodComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class Add_MoodModule { }
