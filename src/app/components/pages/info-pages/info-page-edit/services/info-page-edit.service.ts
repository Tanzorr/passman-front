import { Injectable } from '@angular/core';
import { infoPageSelector } from '../../../../../store/info-pages/info-pages-selectors';
import { Store } from '@ngrx/store';
import { PageState } from '../../../../../store/info-pages/info-pages-reducers';
import { getPage, updatePage } from '../../../../../store/info-pages/info-pages-actions';
import { InfoPage } from '../../../../../models/infoPage';

@Injectable({
  providedIn: 'root',
})
export class InfoPageEditService {
  infoPage$ = this.store.select(infoPageSelector);
  constructor(private store: Store<PageState>) {}

  getInfoPage(): void {
    this.store.dispatch(getPage('8' as any));
  }

  updateInfoPage(page: InfoPage): void {
    this.store.dispatch(updatePage({ page }));
  }
}
