import { Component, OnInit } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseComponent {
  isActive = false;
  email = 'test@me.com';
  course = {
    title: 'Angular tutorial',
    rating: 3.684,
    employes: 5642,
    price: 58643.66,
    startDate: new Date(2020, 1, 1),
  };
  divClicked() {
    console.log('Div propagate');
  }
  onSave($event) {
    $event.stopPropagation();
    console.log('am saved', $event);
    console.log('Email :' + this.email);
  }
}
