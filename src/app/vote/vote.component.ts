import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  totalVotes:number;
  
  upVote=function(){
    this.totalVotes++;
  }
  downVote=function(){
    this.totalVotes--
  }
  constructor() { 
    this.totalVotes=0;
  }

  ngOnInit() {
  }

}
