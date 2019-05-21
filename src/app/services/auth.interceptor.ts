import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const reqCloned = req.clone({ headers: this.headers });
    return next.handle(reqCloned);
  }
}
