import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import {CoursesService} from "../services/courses.service";
import {Observable} from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    courses$: Observable<Course[]>;
    latestLessons$: Observable<Lesson[]>;

    constructor(private coursesService: CoursesService) {
        console.log(`HomeComponent: Constructed`)
    }

    ngOnInit() {

        this.courses$ = this.coursesService.findAllCourses();

        this.latestLessons$ = this.coursesService.findLatestLessons();

    }

    ngOnDestroy(): void {
        console.log(`HomeComponent: OnDestroy`)
    }

}








