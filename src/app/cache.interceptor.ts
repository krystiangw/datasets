@Injectable()
class CacheInterceptor implements HttpInterceptor {
  private cache: Map<HttpRequest, HttpResponse> = new Map()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.method !== "GET") {
        return next.handle(req)
    }
    const cachedResponse: HttpResponse = this.cache.get(req)
    if(cachedResponse) {
        return of(cachedResponse.clone())
    }else {
        return next.handle(req).pipe(
            do(stateEvent => {
                if(stateEvent instanceof HttpResponse) {
                    this.cache.set(req, stateEvent.clone())
                }
            })
        ).share()
    }
  }
}