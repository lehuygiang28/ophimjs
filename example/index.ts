import { MovieType } from '../src/enum';
import { Ophim } from '../src/ophim';

async function main() {
    const ophim = new Ophim({
        host: 'https://ophim1.com/', // https://phimapi.com
    });

    const newestMovies = await ophim.getNewestMovies({ page: 100 });
    console.log(`get newest movies: ${newestMovies.items?.length}`);

    const movieDetail = await ophim.getMovieDetail({ slug: 'bien-tau-grimm' });
    console.log(`get movie detail: ${movieDetail?.data?.item?.slug}`);

    const categories = await ophim.getCategories();
    console.log(`get categories: ${categories?.data.items?.length}`);

    const moviesByCategory = await ophim.getMoviesByCategory({ slug: 'am-nhac' });
    console.log(`get movies by category: ${moviesByCategory.data.items?.length}`);

    const regions = await ophim.getRegions();
    console.log(`get regions: ${regions.data.items?.length}`);

    const moviesByRegion = await ophim.getMoviesByRegion({ slug: 'han-quoc' });
    console.log(`get movies by region: ${moviesByRegion.data.items?.length}`);

    const moviesByType = await ophim.getMoviesByType({ movieType: MovieType.PhimBo });
    console.log(`get movies by type: ${moviesByType.data.items?.length}`);
}

main();
