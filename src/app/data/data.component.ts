import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Issue, Category } from '../models/issues';
import { findCategoryName, findCategoryDescription} from '../utils/utils';

@Component({
  selector: 'app-list',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  issues: Array<Issue>;
  categories: Array<Category>;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.ping();

    this.httpService
      .getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
      });

    this.httpService.getIssues().subscribe((issues: Array<Issue>) => {
      this.issues = issues;
    });
  }

  getCategoryName(id: string) {
    return findCategoryName(this.categories, id);
  }

  getCategoryDescription(id: string) {
    return findCategoryDescription(this.categories, id);
  }

  deleteIssue(id: string) {
    this.httpService.deleteIssue(id).subscribe();

    this.httpService.getIssues().subscribe((issues: Array<Issue>) => {
      this.issues = issues;
    });
  }
}
