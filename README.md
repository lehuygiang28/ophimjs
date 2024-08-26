# ophim-js

An open-source library for getting information about movies and TV series from [Ophim](https://ophim17.cc/api-document)

## ✨ Features

- Get newest movies
- Get list of categories
- Get list of regions
- Get movie detail
- Get list of movies by category/type/region
- And more...

## 🚀 Quick Start

```bash
npm install ophim-js
```

```ts
import { Ophim, MovieType } from 'ophim-js';

const ophim = new Ophim({
    host: 'https://ophim1.com/',
});

const newestMovies = await ophim.getNewestMovies({ page: 1 });
const movieDetail = await ophim.getMovieDetail({ slug: 'one-piece-film-red' });
const moviesByType = await ophim.getMoviesByType({ movieType: MovieType.PhimBo });

/* ... */
```

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

**[MIT](LICENSE) © [Lê Huy Giang](https://github.com/lehuygiang28)**
