import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraQuestionsComponent } from './extra-questions.component';

describe('ExtraQuestionsComponent', () => {
  let component: ExtraQuestionsComponent;
  let fixture: ComponentFixture<ExtraQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraQuestionsComponent]
    });
    fixture = TestBed.createComponent(ExtraQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
