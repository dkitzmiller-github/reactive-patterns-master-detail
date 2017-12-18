import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Lesson} from "../shared/model/lesson";

@Component({
    selector: 'lesson-detail',
    templateUrl: './lesson-detail.component.html',
    styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit, OnDestroy {
    @Input()
    lesson: Lesson;

    constructor() {
        console.log(`LessonDetailComponent: Constructed`)
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        console.log(`LessonDetailComponent: OnDestroy`)
    }

}
