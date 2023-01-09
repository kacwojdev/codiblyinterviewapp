export interface Color {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
}

export interface PageColors {
    page: number
    total_pages: number
    per_page: number
    total: number
    data: Array<Color>
}

interface ServiceInit {
    status: 'init'
}

interface ServiceLoading {
    status: 'loading'
}

interface ServiceLoaded<T> {
    status: 'loaded'
    payload: T
}

interface ServiceError {
    status: 'error'
    error: Error
}

export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError