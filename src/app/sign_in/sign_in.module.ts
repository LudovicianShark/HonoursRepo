import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Sign_InRoutingModule } from "./sign_in.routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { Sign_InComponent } from "./sign_in.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        Sign_InRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        Sign_InComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class Sign_InModule { }
