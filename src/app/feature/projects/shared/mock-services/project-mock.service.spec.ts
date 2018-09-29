import { TestBed } from '@angular/core/testing';

import { ProjectMockService } from './project-mock.service';

describe('ProjectMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectMockService = TestBed.get(ProjectMockService);
    expect(service).toBeTruthy();
  });
});
