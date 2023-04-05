import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCollectionsComponent } from './notes-collections.component';

describe('NotesCollectionsComponent', () => {
  let component: NotesCollectionsComponent;
  let fixture: ComponentFixture<NotesCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
