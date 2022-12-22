export  interface Ideal{
    dealSide: string,
    dealPrice: number,
    dealInstrument: string,
    dealVolume: number,
    dealTime: Date,
}

export interface IState{
    dealData: Ideal[],
    currentPrice: number | null,
    currentInstrument: string,
    isTradeModal: boolean,
    operationType: string
}