import {Action, SELECT_DICE, ROLL_DICE} from "./ActionTypes.ts"
import {isSelectDice} from "./ActionTypes";
import {ModifiedDie} from "./Die";

const initialState = {
    dice: [
        ModifiedDie.fromString("1d20+5"),
        ModifiedDie.fromString("1d8+4")
    ],
    dieString: "1d20+5,1d8+4"
};

export function diceApp(state = initialState, action:Action) {
    console.log("state:", state);
    console.log("action:", action);
    if(isSelectDice(action)) {
        const dice = action.dieString.split(",").map(str => ModifiedDie.fromString(str));
        return { dice };
    }
    return state;
}



