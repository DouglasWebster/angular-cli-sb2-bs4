/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NameListService } from './name-list.service';

describe('NameListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameListService]
    });
  });

  it('should ...', inject([NameListService], (service: NameListService) => {
    expect(service).toBeTruthy();
  }));
});
