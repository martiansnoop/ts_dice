import {Action, SELECT_DICE, ROLL_DICE} from "./ActionTypes.ts"
import {isSelectDice} from "./ActionTypes";
import {ModifiedDie} from "./Die";
import {isRollDie} from "./ActionTypes";
import {cloneDeep} from "lodash";


const d20 = ModifiedDie.fromString("1d20+5");
const d8 = ModifiedDie.fromString("1d8+4");
const rolls = {
    [d8.key]: d8.roll(),
    [d20.key]: d20.roll()
};
const initialState = {
    dice: [
        d8,
        d20
    ],
    dieString: "1d20+5,1d8+4",
    rolls
};

export function diceApp(state = initialState, action:Action):any {
    console.log("state:", state);
    console.log("action:", action);
    if(isSelectDice(action)) {
        const dice = action.dieString.split(",").map(str => ModifiedDie.fromString(str));
        const rolls = dice.reduce((memo, die) => {
            memo[die.key] = die.roll();
            return memo;
        }, {});
        const newState = _.cloneDeep(state);
        newState.dice = dice;
        newState.rolls = rolls;
        return newState;
    }
    else if (isRollDie(action)) {
        const {die} = action;
        //TODO find the functional ninja way to copy the state and assign new values to it
        const newState = _.cloneDeep(state);
        newState.rolls[die.key] = die.roll();
        return newState;
    }
    return state;
}



