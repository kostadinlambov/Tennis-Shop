export class LogModel {
    constructor(
        public id: string,
        public userName: string,
        public action: string,
        public method: number,
        public table: number,
        public time: string
    ) {}
}
