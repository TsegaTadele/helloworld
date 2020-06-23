import {AppError} from './app-error';

export class BadInput extends AppError{

 handleError(error: any){

        console.log('Bad Input man');
    }
}
