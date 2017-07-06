import { Injectable } from '@angular/core';

import { Commentary } from '../models/commentary';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CommentaryService {

	private commentaries: Commentary[];

	constructor (public http: Http) {
		this.loadCommentaries();
	}

	loadCommentaries() {
		this.commentaries = [];

		this.http.get('https://www.sc.com/retail/api/mceservice/v1/commentaries?channel=PLRB&country=HK&language=ENG&segment=GWM')
			.map(res => res.json())
			.subscribe(data => {

				for (let comm of data.data) {
					this.commentaries.push(new Commentary(comm.attributes.title, 
												comm.attributes.summary, 
													comm.attributes.publicationDate,
														comm.attributes.publicationType));
				}

				console.log(this.commentaries);

		});
	}

	getCommentaries() {
		return this.commentaries;
	}
}