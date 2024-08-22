// 定义状态的类型
export type State = {
    displayNavigation: boolean;
    // 控制主题的状态
    themeMode:"dark" | "light"
    currentModel:string
};

export enum  ActionType{
    UPDATE = "UPDATE"
}

type UpdateAction = {
    type: ActionType.UPDATE;
    field: string
    value: any

}

export type Action = UpdateAction
export const initState:State ={
    displayNavigation: true,
    themeMode: "light",
    currentModel:"gpt-3"
}

export function reducer(state:State, action:Action){
    switch(action.type){
        case ActionType.UPDATE:
        return {...state,[action.field]:action.value}
    default: throw new Error()
    }
}