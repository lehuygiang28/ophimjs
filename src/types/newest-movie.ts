export type MovieInNewest = {
    tmdb: object;
    imdb: object;
    modified: object;
    _id: string;
    name: string;
    slug: string;
    origin_name?: string;
    thumb_url?: string;
    poster_url?: string;
    year?: number;
};

export type NewestResponse = {
    status: boolean;
    items: MovieInNewest[];
    pathImage?: string;
    pagination: {
        totalItems: number;
        totalItemsPerPage: number;
        currentPage: number;
        totalPages: number;
    };
};
