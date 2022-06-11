import { TestBed } from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ThemeService} from './core/services';

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent,
        NavbarComponent
      ],
      providers: [ThemeService, provideMockStore({})]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'kanban-task-management-web-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('kanban-task-management-web-app');
  // });
  //
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('kanban-task-management-web-app app is running!');
  // });
});
