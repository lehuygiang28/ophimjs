import type { Movie } from './movie';

export type Director = {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    thumb_url?: string;
    created_at: string;
    updated_at: string;
    movies?: Movie[];
};
