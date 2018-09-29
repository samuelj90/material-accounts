import { ProjectsSharedModule } from './projects-shared.module';

describe('ProjectsSharedModule', () => {
  let projectsSharedModule: ProjectsSharedModule;

  beforeEach(() => {
    projectsSharedModule = new ProjectsSharedModule();
  });

  it('should create an instance', () => {
    expect(projectsSharedModule).toBeTruthy();
  });
});
