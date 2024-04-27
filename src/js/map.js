export default class ErrorRepository {
    constructor() {
        this.errorMap = new Map();
    }

    addError(code, description) {
        this.errorMap.set(code, description);
    }

    translate(code) {
        const description = this.errorMap.get(code);
        return description !== undefined ? description : 'Unknown error';
    }
}