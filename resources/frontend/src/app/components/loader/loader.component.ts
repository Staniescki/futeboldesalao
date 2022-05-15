import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { LoaderService } from 'src/app/services/loader.service'
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('visibleFullPage', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit, OnDestroy {

  /**
   * Define o escopo do loader. Podendo ser default, fullPage e inside.
   */
  @Input() public scope = 'default' // default, fullPage, inside

  /**
   * Define uma chave de identificação que deve ser unica quando o scope é inside.
   */
  @Input() public keyInside = 'main'


  @Input() noSubscribe = false

  @Input() verticalLoader: any
  /**
   * Top Layout
   */
  @Input() top: number = null

  /**
   * Opacity background loader
   */
  @Input() opacity: number = 0.6


  public isVisibleDefault = false

  /**
   * Define quando está visível dentro de algum elemento.
   */
  @Input() isVisibleInside = false

  /**
   * Define quando está visível na página inteira.
   */
  public isVisibleFullPage = false

  /**
   * Armazena uma string de quando está visível na página inteira.
   */
  public visibleFullPage = 'hide'

  /**
   * Define se está em andamento.
   */
  public isLoading = false

  /**
   * Subscrive de loader.
   */
  public subscribeLoaderService: any

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    if(!this.noSubscribe){
      this.subscribeLoaderService = this.loaderService.isVisible.subscribe((isVisible: string) => {

        switch (isVisible) {
          case 'default':
            if (!this.isLoading && this.loaderService.keyInside.value == isVisible) {
              this.loaderService.keyInside.next(null)
              this.isVisibleDefault = true
              this.isVisibleFullPage = false
              this.isVisibleInside = false
              this.visibleFullPage = 'hidden'
              this.isLoading = true
            }
            break
          case 'fullPage':
            if (!this.isLoading && this.loaderService.keyInside.value == isVisible) {
              this.loaderService.keyInside.next(null)
              this.isVisibleFullPage = true
              this.visibleFullPage = 'shown'
              this.isVisibleDefault = false
              this.isVisibleInside = false
              this.isLoading = true
            }
            break
          case 'inside':
            if (
                this.scope == 'inside'
                && this.isLoading != true
                && this.loaderService.keyInside.value == this.keyInside
              ) {
              this.loaderService.keyInside.next(null)
              this.isVisibleInside = true
              this.isVisibleDefault = false
              this.isVisibleFullPage = false
              this.visibleFullPage = 'hidden'
              this.isLoading = true
            }
            break
          case null:
            this.loaderService.keyInside.next(null)
            this.isVisibleDefault = false
            this.isVisibleFullPage = false
            this.isVisibleInside = false
            this.visibleFullPage = 'hidden'
            this.isLoading = false
          break
        }
      })
    }
  }

  public showLoader(type: any, keyInside = 'default'){
    this.loaderService.keyInside.next(keyInside);
    switch (type) {
      case 'default':
        if (!this.isLoading && keyInside == this.loaderService.keyInside.value) {
          this.loaderService.keyInside.next(null)
          this.isVisibleDefault = true
          this.isVisibleFullPage = false
          this.isVisibleInside = false
          this.visibleFullPage = 'hidden'
          this.isLoading = true
        }
        break
      case 'fullPage':
        if (!this.isLoading && keyInside == this.loaderService.keyInside.value) {
          this.loaderService.keyInside.next(null)
          this.isVisibleFullPage = true
          this.visibleFullPage = 'shown'
          this.isVisibleDefault = false
          this.isVisibleInside = false
          this.isLoading = true
        }
        break
      case 'inside':
        if (
          this.isLoading != true
          && keyInside == this.loaderService.keyInside.value
        ) {
          this.loaderService.keyInside.next(null)
          this.isVisibleInside = true
          this.isVisibleDefault = false
          this.isVisibleFullPage = false
          this.visibleFullPage = 'hidden'
          this.isLoading = true
        }
        break
    }
  }

  public hideLoader(type: any) {
    switch (type) {
      case 'default':
          this.isVisibleDefault = false
        break
      case 'inside':
          this.isVisibleInside = false
        break
      case 'fullPage':
          this.isVisibleFullPage = false
          this.visibleFullPage = 'hidden'
        break
    }
    this.isLoading = false
  }

  ngOnDestroy(): void {

  }
}
