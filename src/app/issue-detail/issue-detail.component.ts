import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

import { Issue, Category } from '../models/issues';
import { findCategoryName, findCategoryDescription} from '../utils/utils';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  issue: Issue;
  categories: Array<Category>;

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.httpService.getIssue(id).subscribe((issue: Issue) => {
        this.issue = issue;
      });
    });

    this.httpService
      .getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
      });
  }

  getCategoryName(id: string) {
    return findCategoryName(this.categories, id);
  }

  getCategoryDescription(id: string) {
    return findCategoryDescription(this.categories, id);
  }
}
