// core
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
// services
import { PreloaderService } from "src/app/shared/services/preloader.service";


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: PreloaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();

        return next.handle(req).pipe(finalize(() => {
            this.loaderService.hide();
        }));
    }
}