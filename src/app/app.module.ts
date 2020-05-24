import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { DatabaseService } from "~/database/sqlite.service";
import { Add_MoodComponent } from "./add_mood/add_mood.component";
import { Mood_ListComponent } from "./mood_list/mood_list.component";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    providers: [
        DatabaseService,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],

    declarations: [
        AppComponent,
        //Add_MoodComponent,
        //Mood_ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
