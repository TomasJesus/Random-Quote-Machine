import { useState } from 'react';
import styles from './App.module.scss';
import QuoteComponent from './components/Quote';
import quotes from './quotes.json';
import { Quotes } from './types';
import NewQuote from './components/NewQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
    const allQuotes = quotes as Quotes;

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(
        Math.round(Math.random() * allQuotes.quotes.length)
    );

    const onPress = () => {
        let randomIndex = Math.round(Math.random() * allQuotes.quotes.length);
        if (randomIndex == currentQuoteIndex) {
            randomIndex++;
        }
        setCurrentQuoteIndex(randomIndex);
    };

    return (
        <div id="quote-box" className={styles.App}>
            <QuoteComponent quote={allQuotes.quotes[currentQuoteIndex]} />
            <NewQuote onPress={onPress} />
            <a
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_top"
                href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Life%20shrinks%20or%20expands%20in%20proportion%20to%20one%E2%80%99s%20courage.%22%20Anais%20Nin"
            >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
    );
}

export default App;
