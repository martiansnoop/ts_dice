import {DieView} from "./DieView.tsx";
import {ModifiedDie} from "./Die.ts";
import {connect} from "react-redux";

//can't use props interface here because something something redux magic thing
class App extends React.Component<any, any> {
    constructor(appProps) {
        super(appProps);
    }
    render() {
        const {dice} = this.props;
        return <div>
            { dice.map(die => <DieView key={die.key} modifiedDie={die}/>) }
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        dice:state.dice
    }
}

export default connect(mapStateToProps)(App);
