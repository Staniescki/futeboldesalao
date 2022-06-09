import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http'
import { JwtServiceService } from '../jwt-service.service'
import { Observable } from 'rxjs'
import { tap} from 'rxjs/operators'
import { LocalStorageService } from "../local-storage.service";

export class TokenInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtServiceService, public storageService: LocalStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.storageService.get('token') !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.storageService.get('token')}`,
          'X-Requested-With': 'XMLHttpRequest',
        }
      })
    }
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          console.log(event)
          if (event instanceof HttpResponse) {
            console.log('saiu')
          }
        },
        (error: any) => {
          console.log(error.status)
          console.log('aqui papai')
          if (error.status == 401) {
            this.jwtService.logout()
          }
        }
      ),

    )
  }


  handleError() {

  }
}
