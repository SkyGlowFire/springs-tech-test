type Response<T> = {
    err: any
    data: undefined | T
}

export const api = {
    async get<T>(url: string): Promise<Response<T>>{
        let err, data
        try {
            const res = await fetch(url, {method: 'GET'})
            const json = await res.json()
            data = json.data
        } catch (error: any) {
            console.log(error);
            err = error
        }
        return {err, data}
    }
}