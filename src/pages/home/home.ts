import { Component, OnInit } from '@angular/core';

import { Commentary } from '../../models/commentary';

import { CommentaryService } from '../../services/commentary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })
export class HomePage implements OnInit {

	public commentaries: Commentary[];

	constructor(private commentaryService: CommentaryService) {

	}

	ngOnInit() {
		this.commentaries = this.commentaryService.getCommentaries();
	}

}
