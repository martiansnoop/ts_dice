import {DieListView} from "./DieListView.tsx";
import {connect} from "react-redux";

//can't use props interface here because something something redux magic thing
class App extends React.Component<any, any> {
    constructor(appProps) {
        super(appProps);
    }
    render() {
        return <DieListView dice={this.props.dice} />
    }
}

function mapStateToProps(state) {
    return {
        dice:state.dice
    }
}

export default connect(mapStateToProps)(App);
