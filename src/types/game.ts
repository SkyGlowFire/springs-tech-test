export interface Game{
    id: string
    name: string
    icon_url: string
}

export interface GameWithPosition extends Game{
    pos: number
}