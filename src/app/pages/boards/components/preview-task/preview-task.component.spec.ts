import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTaskComponent } from './preview-task.component';

describe('PreviewTaskComponent', () => {
  let component: PreviewTaskComponent;
  let fixture: ComponentFixture<PreviewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
