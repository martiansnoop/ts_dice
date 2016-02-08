import {DieListView} from "./DieListView.tsx";
import {DieSelector} from "./DieSelector.tsx";
import {connect} from "react-redux";
import {selectDice} from "./ActionTypes.ts";

//can't use props interface here because something something redux magic thing
class App extends React.Component<any, any> {
    constructor(appProps) {
        super(appProps);
    }
    render() {
        return <div>
            <DieSelector dieString={this.props.dieString}
                         onNewDiceSelected={this.props.onNewDiceSelected}/>
            <DieListView dice={this.props.dice} />
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        dice:state.dice,
        dieString:state.dieString
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onNewDiceSelected: (dieString) => dispatch(selectDice(dieString))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
