import {ModifiedDie} from "./Die";

export const SELECT_DICE = "SELECT_DICE";
export const ROLL_DICE = "ROLL_DICE";

export interface Action {
    type:String; //TODO: use string literal types from ts 1.8 here
}
export interface SelectDiceAction extends Action {
    dieString:string;
}
export interface RollDieAction extends Action {
    die:ModifiedDie;
}

export function selectDice(dieString):SelectDiceAction {
    return {
        type: SELECT_DICE,
        dieString
    }
}

export function isSelectDice(action:Action): action is SelectDiceAction {
    return "dieString" in action;
}

export function rollDie(die:ModifiedDie):RollDieAction {
    return {
        type: ROLL_DICE,
        die
    }
}

export function isRollDie(action:Action): action is RollDieAction {
    return "die" in action;
}
