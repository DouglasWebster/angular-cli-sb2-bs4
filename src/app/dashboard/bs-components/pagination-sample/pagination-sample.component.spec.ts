/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ng2-bootstrap/pagination';
import { PaginationSampleComponent } from './pagination-sample.component';

describe('PaginationSampleComponent', () => {
  let component: PaginationSampleComponent;
  let fixture: ComponentFixture<PaginationSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, PaginationModule.forRoot()],
      declarations: [PaginationSampleComponent]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created with the initial page set to default', () => {
    
    expect(component).toBeTruthy();
    let pageShown = debugEl.query(By.css('.card-header')).nativeElement.textContent;
    console.log(`page message is : ${pageShown}`);
    expect(pageShown).toContain(`${component.currentPage}/${Math.ceil(component.totalItems / 10)}`);

  });
});
