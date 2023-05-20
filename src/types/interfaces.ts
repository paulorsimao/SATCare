interface GetOptions {
    page: number,
    pageSize: number,
    filter?: string
}

interface Page<T> {
    data: Array<T>,
    totalCount: number
}
