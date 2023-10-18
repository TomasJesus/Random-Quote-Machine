import { useState } from 'react';
import styles from './App.module.scss';
import QuoteComponent from './components/Quote';
import quotes from './quotes.json';
import { Quotes } from './types';
import NextButton from './components/NextButton';

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
        <div>
            <QuoteComponent quote={allQuotes.quotes[currentQuoteIndex]} />
            <NextButton onPress={onPress} />
        </div>
    );
}

export default App;
