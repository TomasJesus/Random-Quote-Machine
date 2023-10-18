type Props = {
    author: string;
};

function QuoteAuthor(props: Props) {
    return (
        <div>
            <p id="author">{props.author}</p>
        </div>
    );
}

export default QuoteAuthor;
