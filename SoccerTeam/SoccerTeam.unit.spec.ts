import SoccerTeam from "./SoccerTeam";


describe("SoccerTeam", () => {
    let team: SoccerTeam;

    beforeEach(() => {
        team = new SoccerTeam();
    })

    describe('constructor', () => {
        it('should create a new SoccerTeam', () => {
            expect(team.getPlayers().length).toBe(0);
            expect(team.getStatistics().wins).toBe(0);
            expect(team.getStatistics().losses).toBe(0);
            expect(team.getStatistics().draws).toBe(0);
        })
    })

    describe("addPlayer", () => {
        it('should add a player', () => {
            team.addPlayer({
                id: 1,
                name: 'player',
                position: "front"
            })

            const firstPlayer = team.getPlayers()[0];
            expect(firstPlayer.id).toBe(1);
            expect(firstPlayer.name).toBe("player");
            expect(firstPlayer.position).toBe("front");
        })
    })

    describe('removePlayer', () => {
        it('should remove a player if it exists', () => {
            const playerId = 1;
            team.getPlayers().push({
                id: playerId,
                name: 'player',
                position: "front"
            });

            expect(team.removePlayer(playerId)).toBeTruthy();
            expect(team.getPlayers()).toHaveLength(0);
        })

        it('should return false if the player does not exist', () => {
            expect(team.removePlayer(123456789)).toBeFalsy();
        })
    })

    describe('recordMatch', () => {
        it('should record wins', () => {
            team.recordMatch("win");
            expect(team.getStatistics().wins).toBe(1);
        })
        it('should record losses', () => {
            team.recordMatch("loss");
            expect(team.getStatistics().losses).toBe(1);
        })
        it('should record draws', () => {
            team.recordMatch("draw");
            expect(team.getStatistics().draws).toBe(1);
        })
    })

    describe('getStatistics', () => {
        it('should get all the statistics', () => {
            team.recordMatch("win");
            team.recordMatch("win");
            team.recordMatch("win");
            team.recordMatch("loss");
            team.recordMatch("draw");
            team.recordMatch("draw");

            expect(team.getStatistics().wins).toBe(3);
            expect(team.getStatistics().losses).toBe(1);
            expect(team.getStatistics().draws).toBe(2);
        })
    })
})