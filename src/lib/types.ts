


export type NavigationRoutes = {
    title: string
    url: string
}

export type NavStore = {
    location: NavigationRoutes[]
    loan: NavigationRoutes[]
}

export interface InternalSearchModel <T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
}

export type SEOinternalTypes = {
    id: number
    title: string
    content: string
    display: string
    url: string
    searchPattern?: string
}