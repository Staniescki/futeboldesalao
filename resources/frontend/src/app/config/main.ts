import {environment} from "../../environments/environment";

export class Config {

  /**
   * Nome da aplicação.
   */
  public applicationName = 'Futebol de Salão'

  /**
   * Nome encurtado da aplicação.
   */
  public applicationNameShort = 'FutBall'

  /**
   * URL da API do backend.
   */
  private urlServiceBackend = `${environment['APP_URL']}/api/`

  /**
   * URL do backend.
   */
  private urlBackend = `${environment['APP_URL']}/`


  public get(name: any) {
    switch (name) {
      case 'urlServiceBackend':
        return this.getUrlServiceBackend();
        break;
      case 'urlBackend':
        return this.getUrlBackend();
        break;
      default:
        return this[name]
    }
  }

  /**
   * Resgastar informações do WS
   */
  private getUrlServiceBackend(): string{
    if(this.urlServiceBackend != ""){
      return this.urlServiceBackend
    }else {
      let port = (<any>window.location.port) != "" ? `:${(<any>window.location.hostname)}` : ""
      return `${(<any>window.location.hostname)}${port}/api/`
    }
  }

  /**
   * Resgastar informações do backend
   */
  private getUrlBackend(): string{
    if(this.urlBackend != ""){
      return this.urlBackend
    }else {
      let port = (<any>window.location.port) != "" ? `:${(<any>window.location.hostname)}` : ""
      return `${(<any>window.location.hostname)}${port}/api/`
    }
  }

}
