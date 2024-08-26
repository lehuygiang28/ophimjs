import { Core } from './core';
import type { MovieType } from './enum';
import type { Category, Movie, NewestResponse, Region } from './types';
import type { OPhimResponseList, OPhimResponseSingle } from './types/response-wrapper';

export class Ophim extends Core {
    public searchMovies({ keyword }: { keyword: string }) {
        const normalizedKeyword = encodeURIComponent(keyword.trim());
        return this.fetch(`v1/api/tim-kiem/${normalizedKeyword}`);
    }

    public getNewestMovies({ page = 1 }) {
        const path = `danh-sach/phim-moi-cap-nhat?page=${page}`;
        return this.fetch<NewestResponse>(path);
    }

    public getMovieDetail(params: { slug?: string; _id?: string }): Promise<
        OPhimResponseSingle<Movie>
    > {
        this.requireAtLeastOne(params, ['slug']);

        if (params?.slug) {
            return this.fetch(`v1/api/phim/${params.slug}`);
        }

        return this.fetch(`v1/api/phim/id/${params._id}`);
    }

    public getCategories(): Promise<OPhimResponseList<Category>> {
        return this.fetch('v1/api/the-loai');
    }

    public getMoviesByCategory({
        slug,
    }: { slug: Category['slug'] }): Promise<OPhimResponseList<Movie>> {
        return this.fetch(`v1/api/the-loai/${slug}`);
    }
    public getRegions(): Promise<OPhimResponseList<Region>> {
        return this.fetch('v1/api/quoc-gia');
    }

    public getMoviesByRegion({
        slug,
    }: { slug: Region['slug'] }): Promise<OPhimResponseList<Movie>> {
        return this.fetch(`v1/api/quoc-gia/${slug}`);
    }

    public getMoviesByType({
        movieType,
    }: { movieType: MovieType }): Promise<OPhimResponseList<Movie>> {
        return this.fetch(`v1/api/danh-sach/${movieType}`);
    }
}
