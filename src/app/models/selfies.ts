import { Wookie } from './wookie';
/*
 represente un selfie selfie
*/

export class Selfies {
  id!: number;
  titre !:string;
  image!: string;
  Wookie!: Wookie;

  constructor(){
    image:"";
    this.Wookie=new Wookie();
  }
}
