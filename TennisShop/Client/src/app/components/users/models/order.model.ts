export class OrderModel {
    constructor(
        public id: string,
        public racketName: string,
        public quantity: number,
        public racketPrice: number
    ) {}
}
