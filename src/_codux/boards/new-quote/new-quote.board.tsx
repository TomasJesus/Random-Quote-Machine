import { createBoard } from '@wixc3/react-board';
import NewQuote from '../../../components/NewQuote';

export default createBoard({
    name: 'NewQuote',
    Board: () => <NewQuote onPress={() => {}} />,
    isSnippet: true,
});
