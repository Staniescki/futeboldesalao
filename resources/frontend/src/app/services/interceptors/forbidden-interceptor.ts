import { SnotifyService } from 'ng-snotify'

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap} from 'rxjs/operators'

export class ForbiddenInterceptor implements HttpInterceptor {

  constructor(private notify: SnotifyService,) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {

          }
        },
        (error: any) => {
          if (error.status == 403) {
            this.notify.error(`Seu usuário não possui permissão para acessar este recurso. Dúvidas? Contate o suporte Target.IT`, {
              showProgressBar: false,
              timeout: 0,
              closeOnClick: true,
            })
            return error;
          }
        }
      ),
    )
  }


  handleError() {

  }
}
