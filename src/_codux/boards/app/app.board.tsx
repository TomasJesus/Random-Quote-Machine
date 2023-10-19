import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasBackgroundColor: 'rgba(91, 86, 86, 0)',
        windowBackgroundColor: 'rgba(141, 139, 139, 0)'
    }
});
