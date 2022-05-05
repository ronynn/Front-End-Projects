let quoteLength = 0;
const { useEffect, useState, useRef } = React;


const App = () => {
    const [quote, setQuote] = useState('');
    const [allQuotes, setAllQuotes] = useState([]);
    const [error, setError] = useState(false);
    const [colorProp, setColorProp] = useState(colorsArray[0]);
    const [checkQuote, setCheckQuote] = useState({});

    useEffect(() => {
        // Quotes are taken from: http://quotes.stormconsultancy.co.uk/quotes.json
        // due to http request over https, quotes are saved in JSON format
        fetch('./quotes.json')
            .then((res) => res.json())
            .then((quotes) => setAllQuotes(quotes))
            .catch((err) => setError(true));
    }, []);

    useEffect(() => {
        if (allQuotes.length) {
            quoteLength = allQuotes.length;
            generateRandom();
        }
    }, [allQuotes]);

    useEffect(() => {
        setColorProp(colorsArray[Math.floor(Math.random() * 200) % 20]);
    }, [quote]);

    const generateRandom = () => {
        let randomQuote = allQuotes[Math.floor(Math.random() * quoteLength * 10) % quoteLength];
        while (randomQuote.id in checkQuote) {
          randomQuote = allQuotes[Math.floor(Math.random() * quoteLength * 10) % quoteLength];
        }

        checkQuote[randomQuote.id] = true;
        if (Object.keys(checkQuote).length === quoteLength) {
          setCheckQuote({});
        }
        setQuote(randomQuote);
    };

    return (
        <div
            className="wrapper"
        >
            {error ? (
                <div className="error-wrapper">
                    <p className="display-1">
                        Error while fetching the Quotes.
                        Please check the network connection.
                    </p>
                </div>
            ) : (
                quote && (
                    <React.Fragment>
                        <h1 className="display-1 fixed-top">
                            Here are some awesome technical quotes
                        </h1>
                        <div
                            id="quote-box"
                            style={{
                                boxShadow: `0 0 10px 0 ${colorProp.textColor}8`,
                            }}
                        >
                            <div id="text">
                                <span className="quote-sign user-select-none">
                                    &lsquo;&lsquo;
                                </span>
                                {quote.quote}
                            </div>
                            <p id="author">- {quote.author}</p>
                            <div className="action user-select-none">
                         
                                <button
                                    id="new-quote"
                                    onClick={generateRandom}
                                    style={{
                                        backgroundColor: `${colorProp.backgroundColor}}a`,
                                        color: colorProp.textColor,
                                        borderColor: `${colorProp.textColor}a`,
                                    }}
                                >
                                    Next Quote
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                )
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
