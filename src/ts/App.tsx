import views = require("./DieView.tsx");
import dice = require("./Die.ts");
import ModifiedDie = dice.ModifiedDie;

//TODO: this will eventually come from user input
const data:{key: number, die:string}[] = [
    {key: 1, die: "1d20+5"},
    {key: 2,  die: "1d8+4"}
];

interface AppProps {

}

interface AppState {

}

export class App extends React.Component<AppProps, AppState> {
    constructor(appProps) {
        super(appProps);
    }
    render() {
        const dieViews = data.map(({key, die}) => {
            return <views.DieView key={key} modifiedDie={ModifiedDie.fromString(die)}/>;
        });

        return <div> { dieViews } </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('container'));

