import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private routh: ActivatedRoute) {}

  ngOnInit() {
    this.routh.paramMap.subscribe((params) => {
      const id = +params.get('id');
      console.log(id);
    });
  }
}
