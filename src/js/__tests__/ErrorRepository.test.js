import ErrorRepository from '../map';

describe('ErrorRepository class', () => {
    let errorRepository;

    beforeEach(() => {
        errorRepository = new ErrorRepository();
        errorRepository.addError(404, 'Page not found');
        errorRepository.addError(500, 'Internal server error');
        errorRepository.addError(403, 'Access forbidden');
    });

    it('should add an error with code and description to the error repository', () => {
        const initialSize = errorRepository.errorMap.size;
        errorRepository.addError(401, 'Unauthorized');
        expect(errorRepository.errorMap.size).toBe(initialSize + 1);
        expect(errorRepository.errorMap.has(401)).toBe(true);
        expect(errorRepository.errorMap.get(401)).toBe('Unauthorized');
    });

    it('should translate error code to description', () => {
        expect(errorRepository.translate(404)).toBe('Page not found');
        expect(errorRepository.translate(500)).toBe('Internal server error');
        expect(errorRepository.translate(403)).toBe('Access forbidden');
        expect(errorRepository.translate(401)).toBe('Unknown error');
    });

    it('should return "Unknown error" for non-existent error code', () => {
        expect(errorRepository.translate(999)).toBe('Unknown error');
    });
});