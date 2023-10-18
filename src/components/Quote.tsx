import { Quote } from '../types';
import QuoteAuthor from './QuoteAuthor';
import QuoteText from './QuoteText';

type Props = {
    quote: Quote;
};

function QuoteComponent(props: Props) {
    return (
        <div>
            <QuoteText quote={props.quote.quote} />
            <QuoteAuthor author={props.quote.author} />
        </div>
    );
}

export default QuoteComponent;
