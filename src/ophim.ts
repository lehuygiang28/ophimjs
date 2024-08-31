import { Core } from './core';
import type { MovieType } from './enum';
import type { Category, Movie, NewestResponse, Region, SearchResponse, Server } from './types';
import type { OPhimResponseList, OPhimResponseSingle } from './types/response-wrapper';

export class Ophim extends Core {
    public searchMovies({ keyword }: { keyword: string }): Promise<SearchResponse> {
        const normalizedKeyword = encodeURIComponent(keyword.trim());
        return this.fetch(`v1/api/tim-kiem/${normalizedKeyword}`);
    }

    public getNewestMovies({ page = 1, limit = 24 }): Promise<NewestResponse> {
        const path = `danh-sach/phim-moi-cap-nhat?page=${page}&limit=${limit}`;
        return this.fetch(path);
    }

    public getMovieDetail(params: Partial<Pick<Movie, '_id' | 'slug'>>): Promise<
        OPhimResponseSingle<
            Movie & {
                episodes?: Server[];
            }
        >
    > {
        this.requireAtLeastOne(params, ['slug']);

        if (params?.slug) {
            return this.fetch(`v1/api/phim/${params.slug}`);
        }

        return this.fetch(`v1/api/phim/id/${params?._id}`);
    }

    public getCategories(): Promise<OPhimResponseList<Category>> {
        return this.fetch('v1/api/the-loai');
    }

    public getMoviesByCategory({
        slug,
    }: Pick<Category, 'slug'>): Promise<OPhimResponseList<Movie>> {
        return this.fetch(`v1/api/the-loai/${slug}`);
    }

    public getRegions(): Promise<OPhimResponseList<Region>> {
        return this.fetch('v1/api/quoc-gia');
    }

    public getMoviesByRegion({ slug }: Pick<Region, 'slug'>): Promise<OPhimResponseList<Movie>> {
        return this.fetch(`v1/api/quoc-gia/${slug}`);
    }

    public getMoviesByType({
        movieType,
    }: { movieType: MovieType }): Promise<OPhimResponseList<Movie>> {
        return this.fetch(`v1/api/danh-sach/${movieType}`);
    }
}
