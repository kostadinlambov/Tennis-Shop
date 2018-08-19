export class CreateRacketModel {
    constructor(
        public categoryName: string,
        public name: string,
        public description: string,
        public price: number,
        public headSize: number,
        public weight: number,
        public stringPattern: string,
        public mainImageUrl: string,
        public secondImageUrl?: string,
        public thirdImageUrl?: string,
    ) { }
}
