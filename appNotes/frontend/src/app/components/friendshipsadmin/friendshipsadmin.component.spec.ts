import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendshipsadminComponent } from './friendshipsadmin.component';

describe('FriendshipsadminComponent', () => {
  let component: FriendshipsadminComponent;
  let fixture: ComponentFixture<FriendshipsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendshipsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendshipsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
