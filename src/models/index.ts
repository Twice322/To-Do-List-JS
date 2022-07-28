export interface IToDoItem {
    id: number,
    text: string,
    completed: boolean
}

export interface IToDoList {
    items: Array<IToDoItem>
}

export interface IChange{
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export interface IChildren  { 
    children: Array<JSX.Element>,
}

export interface IFooter {
    setFilteredItems: React.Dispatch<React.SetStateAction<IToDoItem[]>>
}

export interface IState {
    items: any[]
}

export interface IToDoListItem {
    text: string,
    id: number,
    completed: boolean
}