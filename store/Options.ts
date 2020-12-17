import {Min, Max} from 'class-validator';
import {action, observable, makeAutoObservable} from 'mobx';

import {TTheme, TSizes} from '../types';

export class Options {
  public theme: TTheme = 'fantasy';

  @Min(20)
  @Max(200)
  @observable
  public imagesPerPage = 50;

  @observable
  public previewsSize: TSizes = 'small';

  @observable
  public loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public setTheme(theme: TTheme): void {
    this.theme = theme;
  };

  @action
  public setImagesPerPage(amount: number): void {
    this.imagesPerPage = amount;
  };

  @action
  public setPreviewsSize(size: TSizes): void {
    this.previewsSize = size;
  };

  @action
  public switchLoading(value: boolean): void {
    this.loading = value;
  };
}
