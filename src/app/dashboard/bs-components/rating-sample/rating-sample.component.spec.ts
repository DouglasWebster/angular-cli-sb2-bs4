/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RatingModule } from 'ng2-bootstrap/rating';
import { RatingSampleComponent } from './rating-sample.component';

describe('RatingSampleComponent', () => {
  let component: RatingSampleComponent;
  let fixture: ComponentFixture<RatingSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RatingModule.forRoot()],
      declarations: [RatingSampleComponent]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('the Static section', () => {
    let staticSection: DebugElement;

    beforeEach(() => {
      staticSection = debugEl.queryAll(By.css('h4')).find(e => e.nativeElement.textContent.startsWith('Static')).parent;
    });

    it('should be defined', () => {
      expect(staticSection).toBeDefined();
    });

    it('should have a block displaying the rating selected', () => {
      const txtDisp = staticSection.query(By.css('.card-text')).nativeElement.innerText;
      expect(txtDisp).toContain('Rate: 7');
    });

    it('should have the the correct number of rating stars', () => {
      const maxRating = component.max.toString();
      const overRating = (component.max + 1).toString();
      const lastSelector = staticSection.query(By.css('[title = maxRating]'));
      const overSelector = staticSection.query(By.css('[title = overRating]'));
      console.log(lastSelector);

      expect(lastSelector).toBeDefined();
      expect(overSelector).toBeNull();
    });
  });

  describe('the Dynamic section', () => {
    let dynamicSection: DebugElement;

    beforeEach(() => {
      dynamicSection = debugEl.queryAll(By.css('h4')).find(e => e.nativeElement.textContent.startsWith('Dynamic')).parent;
    });

    it('should be defined', () => {
      expect(dynamicSection).toBeDefined();
    });

    it('should have a block displaying the rating selected', () => {
      const txtDisp = dynamicSection.query(By.css('.card-text')).nativeElement.innerText;
      expect(txtDisp).toContain('Rate: 7');
    });

    it(`should have a button labled 'Toggle Readonly'`, () => {
      const btnRO = dynamicSection.query(By.css('.btn-primary'));
      expect(btnRO.nativeElement.innerText).toEqual('Toggle Readonly');

    });

  });

});
