import RandomQuoteFetcher from "./RandomQuoteFetcher";

import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();


describe("RandomQuoteFetcher", () => {
    describe('fetchRandomQuote', () => {
        let fetchSpy;

        it('should return a random quote with a Mock', async () => {
            fetchMock.resetMocks();
            fetchMock.mockResponseOnce(JSON.stringify(
                {
                    "content": "test",
                    "author": "test author"
                }
            ));

            const fetcher = new RandomQuoteFetcher();
            const quote = await fetcher.fetchRandomQuote();

            expect(quote).toBeDefined();
            expect(quote.author).toBe("test author");
            expect(quote.content).toBe("test");
        })

        // it('should return a random quote with a Spy', async () => {
        //     fetchSpy = jest.spyOn(global, 'fetch');
        //
        //     const fetcher = new RandomQuoteFetcher();
        //     const quote = await fetcher.fetchRandomQuote();
        //
        //     // can't do it because we call response.json() after
        //     expect(fetchSpy).toHaveBeenCalledWith('https://api.quotable.io/random');
        //
        //     fetchSpy.mockRestore();
        // })
    })
})