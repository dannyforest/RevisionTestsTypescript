type Quote = {
    content: string;
    author: string;
};

class RandomQuoteFetcher {
    private apiUrl: string;

    /**
     * Constructs a new RandomQuoteFetcher object.
     * @param apiUrl The API URL for fetching random quotes.
     */
    constructor(apiUrl: string = 'https://api.quotable.io/random') {
        this.apiUrl = apiUrl;
    }

    /**
     * Fetches a random quote from the API.
     * @returns A promise that resolves to a Quote object.
     */
    async fetchRandomQuote(): Promise<Quote> {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return { content: data.content, author: data.author };
        } catch (error) {
            throw new Error(`Error fetching quote: ${error}`);
        }
    }
}

export default RandomQuoteFetcher;