import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {PlaceholderDirective} from './core/directives/placeholder.directive';
import {ThemeService} from './core/services';
import {ModalService} from './core/services/modal.service';
import {LayoutStoreFacade} from './core/store/layout/layout-store.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(PlaceholderDirective, {static: true}) placeHolder!: PlaceholderDirective;
  isExpanded$: Observable<boolean> = this.layoutStoreFacade.isSidenavClosed$;

  constructor(
    private layoutStoreFacade: LayoutStoreFacade,
    private modalService: ModalService,
    private themeService: ThemeService) {
  }
  ngOnInit() {
    this.themeService.initTheme();
    this.modalService.init(this.placeHolder.viewContainerRef);
  }
}
