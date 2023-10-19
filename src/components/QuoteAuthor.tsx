
import QuoteAuthor_module from './QuoteAuthor.module.scss'; type Props = {
    author: string;
};

function QuoteAuthor(props: Props) {
    return (
        <div>
            <p id="author" className={QuoteAuthor_module.Author}>{props.author}</p>
        </div>
    );
}

export default QuoteAuthor;
