import {AppError} from './app-error';

export class ServerNotFound extends AppError{


 handleError(error: any){

        console.log('ServerNotFound');
    }
}
