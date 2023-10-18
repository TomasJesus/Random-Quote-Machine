type Props = {
    quote: string;
};

function QuoteText(props: Props) {
    return (
        <div>
            <h3 id="text">{props.quote}</h3>
        </div>
    );
}
export default QuoteText;
