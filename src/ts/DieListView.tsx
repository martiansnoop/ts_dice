import {DieView} from "./DieView.tsx";

export const DieListView = ({dice, requestRoll, rolls}) => <div>
    { dice.map(die => <DieView key={die.key} modifiedDie={die} requestRoll={requestRoll} rolls={rolls[die.key]}/>) }
</div>;
