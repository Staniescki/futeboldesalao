import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  /**
   * Define se é visível.
   */
  public isVisible: BehaviorSubject<string> = new BehaviorSubject<string>(null)

  /**
   * Utilizado quando o scope for inside(Dentro de outro componente)
   */
  public keyInside: BehaviorSubject<string> = new BehaviorSubject<string>(null)

  constructor() { }

  show(flag = 'default', keyInside: any = null) {

    if (flag == 'inside' && keyInside) {
      this.keyInside.next(keyInside)
    } else {
      this.keyInside.next(flag)
    }

    this.isVisible.next(flag)
    return true
  }

  hide() {
    this.isVisible.next(null)
    this.keyInside.next(null)
    return true
  }
}
