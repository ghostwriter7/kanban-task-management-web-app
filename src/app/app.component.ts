import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {PlaceholderDirective} from './core/directives/placeholder.directive';
import {ThemeService} from './core/services';
import {ModalService} from './core/services/modal.service';
import {LayoutStoreFacade} from './core/store/layout/layout-store.facade';
import {AuthStoreFacade} from './pages/auth/core/store/auth-store.facade';
import {BoardsStoreFacade} from './pages/boards/core/store/boards-store.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(PlaceholderDirective, {static: true}) placeHolder!: PlaceholderDirective;
  isExpanded$: Observable<boolean> = this.layoutStoreFacade.isSidenavClosed$;
  isLoggedIn$: Observable<boolean> = this.authStoreFacade.isLoggedIn$;
  isMobile!: boolean;

  constructor(
    private authStoreFacade: AuthStoreFacade,
    private boardsStoreFacade: BoardsStoreFacade,
    private breakpointObserver: BreakpointObserver,
    private layoutStoreFacade: LayoutStoreFacade,
    private modalService: ModalService,
    private themeService: ThemeService) {

  }
  ngOnInit() {
    this.boardsStoreFacade.loadBoards();
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(({matches}) => {
      this.isMobile = matches;
    });
    this.themeService.initTheme();
    this.modalService.init(this.placeHolder.viewContainerRef);
  }
}
