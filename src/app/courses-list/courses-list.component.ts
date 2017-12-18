import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Course} from "../shared/model/course";

@Component({
    selector: 'courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {

    @Input()
    courses: Course[];

    constructor() {
        console.log("CourseListComponent: Constructor")
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
       console.log("CourseListComponent: OnDestroy")
    }
}
