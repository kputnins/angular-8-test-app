import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Issue, Category, CategoryId } from '../models/issues';
import { findCategoryName, findCategoryDescription} from '../utils/utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  issues: Array<Issue>;
  categories: Array<Category>;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
      });

    this.getIssues();
  }

  getIssues() {
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'];

      let categoryId = '';
      if (filter) {
        categoryId = `?categoryId=${CategoryId[filter]}`;
      }

      this.httpService.getIssues(categoryId).subscribe((issues: Array<Issue>) => {
        this.issues = issues;
      });
    });
  }

  getCategoryName(id: string) {
    return findCategoryName(this.categories, id);
  }

  getCategoryDescription(id: string) {
    return findCategoryDescription(this.categories, id);
  }

  deleteIssue(id: string) {
    this.httpService.deleteIssue(id).subscribe(() => {
      this.getIssues();
    });
  }
}
