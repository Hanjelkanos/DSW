import { TestBed } from '@angular/core/testing';

import { NotesusersService } from './notesusers.service';

describe('NotesusersService', () => {
  let service: NotesusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
