type Player = {
    id: number;
    name: string;
    position: string;
}

class SoccerTeam {
    private players: Player[];
    private wins: number;
    private losses: number;
    private draws: number;

    /**
     * Constructs a new SoccerTeam object.
     */
    constructor() {
        this.players = [];
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }

    /**
     * Adds a new player to the team.
     * @param player The player to add.
     */
    addPlayer(player: Player): void {
        this.players.push(player);
    }

    getPlayers(): Player[] {
        return this.players;
    }

    /**
     * Removes a player from the team based on their ID.
     * @param playerId The ID of the player to remove.
     * @returns True if the player was found and removed, false otherwise.
     */
    removePlayer(playerId: number): boolean {
        const playerIndex = this.players.findIndex(player => player.id === playerId);
        if (playerIndex > -1) {
            this.players.splice(playerIndex, 1);
            return true;
        }
        return false;
    }

    /**
     * Records the result of a soccer match.
     * @param result The result of the match ('win', 'loss', 'draw').
     */
    recordMatch(result: 'win' | 'loss' | 'draw'): void {
        if (result === 'win') {
            this.wins++;
        } else if (result === 'loss') {
            this.losses++;
        } else if (result === 'draw') {
            this.draws++;
        }
    }

    /**
     * Retrieves the current statistics of the team.
     * @returns An object containing the number of wins, losses, and draws.
     */
    getStatistics(): { wins: number; losses: number; draws: number } {
        return {
            wins: this.wins,
            losses: this.losses,
            draws: this.draws
        };
    }
}

export default SoccerTeam;