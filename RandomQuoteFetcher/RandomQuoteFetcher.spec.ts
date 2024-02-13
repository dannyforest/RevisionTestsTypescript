import RandomQuoteFetcher from "./RandomQuoteFetcher";


describe("RandomQuoteFetcher", () => {
    describe('fetchRandomQuote', () => {
        it('should return a random quote', async () => {
            const fetcher = new RandomQuoteFetcher();
            const quote = await fetcher.fetchRandomQuote();

            expect(quote).toBeDefined();
            expect(quote.author).toBeDefined();
            expect(quote.content).toBeDefined();
        })
    })
})