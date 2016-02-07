import {DieView} from "./DieView.tsx";

export const DieListView = ({dice}) => <div>
    { dice.map(die => <DieView key={die.key} modifiedDie={die}/>) }
</div>;
