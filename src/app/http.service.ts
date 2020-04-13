import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Issue } from './models/issues';

const API = 'http://localhost:3000';
const ISSUES = 'issues';
const CATEGORIES = 'categories';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${API}/${CATEGORIES}`);
  }

  getIssues(params: string = '') {
    console.log('TCL: HttpService -> getIssues -> params', params);
    return this.http.get(`${API}/${ISSUES}/${params}`);
  }

  getIssue(id: string) {
    return this.http.get(`${API}/${ISSUES}/${id}`);
  }

  postIssue(issue: Issue) {
    return this.http.post(`${API}/${ISSUES}`, issue);
  }

  deleteIssue(id: string) {
    return this.http.delete(`${API}/${ISSUES}/${id}`);
  }
}
