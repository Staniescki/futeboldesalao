import { Inject, Injectable } from '@angular/core'
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs'


const STORAGE_KEY = 'FuteboldeSalao'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorageChanged: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  public set(key: any, value: any) {
    this.storage.set(STORAGE_KEY + key, value)
    return this.localStorageChanged.next(key)
  }

  public get(key: any) {
    return this.storage.get(STORAGE_KEY + key)
  }

  public remove(key: any) {
    return this.storage.remove(STORAGE_KEY + key)
  }
}
