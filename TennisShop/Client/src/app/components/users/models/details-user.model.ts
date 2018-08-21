export class DetailsUserModel {
    constructor(
        public id?: string,
        public username?: string,
        public firstName?: string,
        public lastName?: string,
        public address?: string,
        public city?: string,
        public email?: string,
        public role?: string,
        public payments?: Array<string>,
        public orders?: Array<string>,
        public feedBackSet?: Array<string>
    ) { }
}
