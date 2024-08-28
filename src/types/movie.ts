import type { Category } from './category';
import type { Region } from './region';

export type Movie = {
    /**
     * @example {"type": null, "id": "", "season": null, "vote_average": 0, "vote_count": 0}
     */
    tmdb?: {
        type: 'tv' | 'movie' | null | string;
        id: string;
        season: number | null;
        vote_average: number;
        vote_count: number;
    };

    /**
     * @example {"id": ""}
     */
    imdb?: {
        id: string;
    };

    created: {
        /**
         * @example "2022-07-25T10:12:16.000Z"
         */
        time: string;
    };

    modified?: {
        time: string;
        user_id?: string;
        user_name?: string;
    };

    /**
     * @example "62de6c802d8263cfd10a2d48"
     */
    _id: string;

    /**
     * @example "ONE PIECE FILM: RED"
     */
    name: string;

    /**
     * @example "One Piece Movie 15"
     */
    origin_name?: string;

    /**
     * @example "<p>Đây là phần phim thứ mười lăm trong loạt phim điện ảnh của One Piece, dựa trên bộ truyện manga nổi tiếng cùng tên của tác giả Eiichiro Oda. Phim được công bố lần đầu tiên vào ngày 21 tháng 11, 2021 để kỷ niệm sự ra mắt của tập phim thứ 1000 của bộ anime One Piece và sau khi tập phim này được phát sóng, đoạn quảng cáo và áp phích chính thức của phim cũng chính thức được công bố. Phim dự kiến sẽ phát hành vào ngày 6 tháng 8 năm 2022. Bộ phim được giới thiệu sẽ là hành trình xoay quanh một nhân vật nữ mới cùng với Shanks \"Tóc Đỏ\".</p>"
     */
    content?: string;

    /**
     * @example "hoathinh"
     */
    type: string;

    /**
     * @example "completed"
     */
    status: string;

    /**
     * @example "https://img.ophim.live/uploads/movies/one-piece-film-red-thumb.jpg"
     */
    thumb_url?: string;

    /**
     * @example "https://img.ophim.live/uploads/movies/one-piece-film-red-poster.jpg"
     */
    poster_url?: string;

    is_copyright?: boolean;
    sub_docquyen?: boolean;
    chieurap?: boolean;

    /**
     * @example "https://www.youtube.com/watch?v=QM8T14BCR6o"
     */
    trailer_url?: string;

    /**
     * @example "116 phút"
     */
    time?: string;

    /**
     * @example "Full"
     */
    episode_current?: string;

    /**
     * @example "1"
     */
    episode_total?: string;

    /**
     * @example "FHD"
     */
    quality?: string;

    /**
     * @example "Vietsub + TM"
     */
    lang?: string;
    notify?: string;
    showtimes?: string;

    /**
     * @example "one-piece-film-red"
     */
    slug: string;

    /**
     * @example 2024
     */
    year?: number;

    view?: number;

    // episode_time?: number;
    /**
     * @example 4769
     */
    // view_total?: number;
    // view_day?: number;
    // view_week?: number;
    // rating_star?: number;
    // rating_count?: number;
    // seo_title?: string;
    // seo_des?: string;
    // seo_key?: string;

    /**
     * @example "2022-07-25T10:12:16.000Z"
     */
    // created_at: string;
    /**
     * @example "2023-03-21T10:51:03.000Z"
     */
    // updated_at: string;
    // deleted_at?: string;
    /**
     * @example [""]
     */
    actor?: string[];
    /**
     * @example [""]
     */
    director?: string[];
    /**
     * @example [{"id": "620a2293e0fc277084dfd489", "name": "Phi\u00eau L\u01b0u", "slug": "phieu-luu"}]
     */
    category?: Category[];
    /**
     * @example [{"id": "620a2307e0fc277084dfd726", "name": "Nh\u1eadt B\u1ea3n", "slug": "nhat-ban"}]
     */
    country?: Region[];
};

export type Episode = {
    /**
     * @example "Full"
     */
    name: string;
    /**
     * @example "full"
     */
    slug: string;
    /**
     * @example "One.Piece.Film.Red.2022.AMZN-WEBDL.Zino"
     */
    filename: string;
    /**
     * @example "https://vip.opstream14.com/share/a96683574013404fbdc72bcb5f4c80e7"
     */
    link_embed: string;
    /**
     * @example "https://vip.opstream14.com/20230321/33905_262f8bb8/index.m3u8"
     */
    link_m3u8: string;
};

export type ServerData = {
    /**
     * @example "Vietsub #1"
     */
    serve_name: string;
    server_data: Episode[];
};

export type MovieResponse = {
    /**
     * @example true
     */
    status: boolean;
    /**
     * @example ""
     */
    msg: string;
    movie: Movie;
    /**
     * @example [{"server_name": "Vietsub #1", "server_data": [{"name": "Full", "slug": "full", "filename": "One.Piece.Film.Red.2022.AMZN-WEBDL.Zino", "link_embed": "https://vip.opstream14.com/share/a96683574013404fbdc72bcb5f4c80e7", "link_m3u8": "https://vip.opstream14.com/20230321/33905_262f8bb8/index.m3u8"}]}, {"server_name": "Thuy\u1ebft Minh #1", "server_data": [{"name": "Full", "slug": "full", "filename": "One Piece Film Red 2022  AMZN WEB-DL 1080p EAC3 H264 (1)", "link_embed": "https://vip.opstream14.com/share/3e93d94392796ac22707eb6e017acdbc", "link_m3u8": "https://vip.opstream14.com/20230313/33668_0d5c2f8e/index.m3u8"}]}]
     */
    episodes?: ServerData[];
};
