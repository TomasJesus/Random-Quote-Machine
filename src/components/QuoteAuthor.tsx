type Props = {
    author: string;
};

function QuoteAuthor(props: Props) {
    return (
        <div>
            <p>{props.author}</p>
        </div>
    );
}

export default QuoteAuthor;
