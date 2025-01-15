import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTheatresComponent } from './user-theatres.component';

describe('UserTheatresComponent', () => {
  let component: UserTheatresComponent;
  let fixture: ComponentFixture<UserTheatresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTheatresComponent]
    });
    fixture = TestBed.createComponent(UserTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
