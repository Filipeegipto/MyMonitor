import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDistributionComponent } from './score-distribution.component';

describe('ScoreDistributionComponent', () => {
  let component: ScoreDistributionComponent;
  let fixture: ComponentFixture<ScoreDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
