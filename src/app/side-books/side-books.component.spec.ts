import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBooksComponent } from './side-books.component';

describe('SideBooksComponent', () => {
  let component: SideBooksComponent;
  let fixture: ComponentFixture<SideBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
