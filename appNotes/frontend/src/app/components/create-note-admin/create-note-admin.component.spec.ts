import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteAdminComponent } from './create-note-admin.component';

describe('CreateNoteAdminComponent', () => {
  let component: CreateNoteAdminComponent;
  let fixture: ComponentFixture<CreateNoteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNoteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
