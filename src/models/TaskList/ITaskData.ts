import { IListState } from "."

export interface ITaskData {
    state: IListState
    dispatch: React.Dispatch<any>
}