import { Subject }    from 'rxjs/Subject';
import {Injectable}   from '@angular/core';

@Injectable()
export class BaseService 
{
   private src  = new Subject<any>();
   private dst  = new Subject<any>();

   source      = this.src.asObservable();
   destination = this.dst.asObservable();

   emit(data:any)
   {
      this.src.next(data);
   }

   push(data:any)  
   {
    this.dst.next(data);
   }
}