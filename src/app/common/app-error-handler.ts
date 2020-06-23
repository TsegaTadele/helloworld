import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any){
       alert('Un expected Error Occurred');
       console.log(error);
  }

}
