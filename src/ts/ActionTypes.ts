
export const SELECT_DICE = "SELECT_DICE";
export const ROLL_DICE = "ROLL_DICE";

export interface Action {
    type:String; //TODO: use string literal types from ts 1.8 here
}
export interface SelectDiceAction extends Action {
    dieString:string;
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

export function rollDice():Action {
    return {
        type: ROLL_DICE
    }
}
