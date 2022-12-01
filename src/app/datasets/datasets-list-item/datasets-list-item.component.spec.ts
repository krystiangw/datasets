import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsListItemComponent } from './datasets-list-item.component';

describe('DatasetsListItemComponent', () => {
  let component: DatasetsListItemComponent;
  let fixture: ComponentFixture<DatasetsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasetsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
