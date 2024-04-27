import { Team } from '../team';
import Character from '../character'; 

describe('Team class', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Naruto');
        character2 = new Character('Sasuke');
        character3 = new Character('Sakura');
    });


    it('should add a character to the team', () => {
        team.add(character1);
        expect(team.members.size).toBe(1);
        expect(team.members.has(character1)).toBe(true);
    });

    it('should add multiple characters to the team using addAll', () => {
        team.addAll(character1, character2, character3);
        expect(team.members.size).toBe(3);
        expect(team.members.has(character1)).toBe(true);
        expect(team.members.has(character2)).toBe(true);
        expect(team.members.has(character3)).toBe(true);
    });

    it('should not add the same character twice', () => {
        team.add(character1);
        team.addAll(character2, character3, character1); // character1 already added
        expect(team.members.size).toBe(3); // Only character1, character2, character3 should be added
    });

    it('should convert team members to an array', () => {
        team.addAll(character1, character2, character3);
        const teamArray = team.toArray();
        expect(teamArray).toEqual([character1, character2, character3]);
    });

    it('should throw an error when trying to add a duplicate character', () => {
        team.add(character1);
        expect(() => {
            team.add(character1);
        }).toThrow('This character is already in the team.');
    });
});