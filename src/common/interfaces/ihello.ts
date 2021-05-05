export interface IHello {
  name: string;
  world: HelloWorld;
  children: IHelloChild[];
}

export enum HelloWorld {
  Earth = 'Earth',
  Mars = 'Mars',
  Venus = 'Venus'
}

export interface IHelloChild {
  hello: string;
  firstName: string;
  surname: string;
  dob?: Date;
}
