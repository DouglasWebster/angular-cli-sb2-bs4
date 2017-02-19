/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { TypeaheadModule } from 'ng2-bootstrap';
import { TypeaheadSampleComponent } from './typeahead-sample.component';

describe('TypeaheadSampleComponent', () => {
  let component: TypeaheadSampleComponent;
  let fixture: ComponentFixture<TypeaheadSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TypeaheadModule.forRoot()],
      declarations: [ TypeaheadSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
