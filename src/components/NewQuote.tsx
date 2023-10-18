
import NewQuote_module from './NewQuote.module.scss'; type Props = {
    onPress: () => void;
};

function NewQuote(props: Props) {
    return (
        <div>
            <button id="new-quote" onClick={props.onPress} className={NewQuote_module.NewQuoteButton}>
                New Quote
            </button>
        </div>
    );
}

export default NewQuote;
