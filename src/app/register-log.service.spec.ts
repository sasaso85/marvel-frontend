import { TestBed } from '@angular/core/testing';

import { RegisterLogService } from './register-log.service';

describe('RegisterLogService', () => {
  let service: RegisterLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
