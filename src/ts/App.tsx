import DieView = components.DieView;

namespace app {
    //TODO: this will eventually come from user input
    const data:string[] = [
        "1d20+5", "1d8+4"
    ];

    export interface AppProps {

    }

    export interface AppState {

    }

    export class App extends React.Component<AppProps, AppState> {
        constructor(appProps) {
            super(appProps);
        }
        render() {
            const dieViews = data.map(dieString => {
                const die = dieString.split("+")[0];
                const count = +die.split("d")[0];
                const sides = +die.split("d")[1];
                const modifier = +dieString.split("+")[1];

                return <DieView key={Math.random()} sides={sides} modifier={modifier}/>;
            });

            return <div> { dieViews } </div>;
        }
    }

    ReactDOM.render(<App />, document.getElementById('container'));
}

