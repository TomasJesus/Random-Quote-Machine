type Props = {
    onPress: () => void;
};

function NextButton(props: Props) {
    return (
        <div>
            <button onClick={props.onPress}>Next</button>
        </div>
    );
}

export default NextButton;
