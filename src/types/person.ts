export enum EPersonId {
    Me = "Kakio",
    Ren = "Ren",
    Matsubara = "Matsubara",
    Sakurai = "Sakurai",
}


export class Person {
    constructor(
        public Id: EPersonId,
        public EnglishName: string,
        public JapanName: string,
        public Homepage: string) {
        this.IsMe = Id == EPersonId.Me;
    }
    public IsMe: boolean;
}
