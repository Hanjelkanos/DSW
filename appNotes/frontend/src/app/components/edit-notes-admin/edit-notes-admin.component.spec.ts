import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotesAdminComponent } from './edit-notes-admin.component';

describe('EditNotesAdminComponent', () => {
  let component: EditNotesAdminComponent;
  let fixture: ComponentFixture<EditNotesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNotesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNotesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
