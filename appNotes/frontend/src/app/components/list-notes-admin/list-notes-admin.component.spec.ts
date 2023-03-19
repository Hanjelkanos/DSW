import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotesAdminComponent } from './list-notes-admin.component';

describe('ListNotesAdminComponent', () => {
  let component: ListNotesAdminComponent;
  let fixture: ComponentFixture<ListNotesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNotesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNotesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
