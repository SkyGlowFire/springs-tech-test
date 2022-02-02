export function moveArrayItem<T>(arr: T[], movingElemIdx: number, nextElemIdx: number): T[]{
    if(movingElemIdx < 0 || movingElemIdx >= arr.length || nextElemIdx < 0 || nextElemIdx >= arr.length){
        return arr
    }
    const movingElem = arr[movingElemIdx]
    const newArr =  arr.filter((_, idx) => idx !== movingElemIdx)
    newArr.splice(nextElemIdx, 0, movingElem)
    
    return newArr
}

export function uuid(){
    return Math.floor(Math.random() * Math.pow(10, 6)).toString()
}

export function sortArrayOfObjects<T extends {}>(arr: T[], key: keyof T, asc: boolean ): T[]{
    const newArr = arr.slice()
    newArr.sort((obj1, obj2) => {
        let a = obj1[key] as any
        let b = obj2[key] as any
        if(typeof a === 'string') a = a.toLowerCase()
        if(typeof b === 'string') b = b.toLowerCase()
        if(a === b) return 0
        const res = a > b ? 1 : -1
        return asc ? res : -res
    })
    
    return newArr
}