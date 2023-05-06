import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FileService } from '@services/file.service';

import { File } from '@models/file.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  files: File[] = [];
  isLoading = false;

  constructor(
    private fileService: FileService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({ q }) => {
      if (q) this.searchFiles(q);
      else this.router.navigate(['/']);
    });
  }

  searchFiles(query: string): void {
    this.isLoading = true;
    this.fileService.searchFiles(query).subscribe({
      next: ({ files }) => {
        this.files = files;
        this.isLoading = false;
      },
      error: () => this.router.navigate(['/']),
      complete: () => this.isLoading = false,
    });
  }

}
