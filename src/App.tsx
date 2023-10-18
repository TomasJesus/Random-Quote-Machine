import { useState } from 'react';
import styles from './App.module.scss';
import QuoteComponent from './components/Quote';
import quotes from './quotes.json';
import { Quotes } from './types';

function App() {
    const allQuotes = quotes as Quotes;

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    return (
        <div>
            <QuoteComponent quote={allQuotes.quotes[currentQuoteIndex]} />
        </div>
    );
}

export default App;
