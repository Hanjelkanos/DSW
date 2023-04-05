import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsadminComponent } from './collectionsadmin.component';

describe('CollectionsadminComponent', () => {
  let component: CollectionsadminComponent;
  let fixture: ComponentFixture<CollectionsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
