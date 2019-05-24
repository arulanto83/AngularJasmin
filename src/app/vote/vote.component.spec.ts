import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Testing VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement:DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //hold a reference
    debugElement=fixture.debugElement.query(By.css('p'))
    htmlElement=debugElement.nativeElement;
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });

  it("totalVotes to increase by 1 (in view) when clicked on +",()=>{
    component.upVote();
    fixture.detectChanges();
    //assert that value is increased by 1 (it was 0 so it should be 1)
    expect(htmlElement.textContent).toBe("Vote: 1");
  })

  it("totalVotes to decrease by 1 (in view) when clicked on +",()=>{
    component.totalVotes=0;
    component.downVote();
    fixture.detectChanges();
    //assert that value is increased by 1 (it was 0 so it should be 1)
    expect(htmlElement.textContent).toBe("Vote: -1");
  })
});
