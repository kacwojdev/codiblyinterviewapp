export type Color = {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
}

export type Colors = Array<Color>

export type ApiResponse = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Colors,
    support: any
}