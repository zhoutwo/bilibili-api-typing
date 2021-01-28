export interface Category {
  id: number;
  parent_id: number;
  name: string;
}

export interface User {
  mid: number;
  name: string;
  face: string;
  pendant: {
    pid: number;
    name: string;
    image: string;
    expire: number;
  };
  official_verify: {
    type: number;
    desc: string;
  };
  nameplate: {
    nid: number;
    name: string;
    image: string;
    image_small: string;
    level: string;
    condition: string;
  };
  vip: {
    type: number;
    status: number;
    due_date: number;
    vip_pay_type: number;
    theme_type: number;
    label: string | null;
  };
}

export interface ArticleList {
  id: number;
  mid: number;
  name: string;
  image_url: string;
  update_time: number;
  ctime: number;
  publish_time: number;
  summary: string;
  words: number;
  read: number;
  articles_count: number;
}

export interface Article {
  id: number;
  category: Category;
  categories: Category[];
  title: string;
  summary: string;
  /**
   * Can be empty string.
   */
  banner_url: string;
  template_id: number;
  state: number;
  author: User;
  reprint: number;
  image_urls: string[];
  publish_time: number;
  ctime: number;
  stats: {
    view: number;
    favorite: number;
    like: number;
    dislike: number;
    reply: number;
    share: number;
    coin: number;
    dynamic: number;
  };
  attributes: number;
  /**
   * Word count.
   */
  words: number;
  origin_image_urls: string[];
  list: ArticleList;
  is_like: boolean;
  media: {
    score: number;
    media_id: number;
    title: string;
    cover: string;
    area: string;
    type_id: number;
    type_name: string;
    spoiler: number;
  };
  apply_time: string;
  check_time: string;
  original: number;
  act_id: number;
  dispute: string | null;
}

export interface ListArticleData {
  articles: Article[];
  /**
   * Page number. Starts from 1.
   */
  pn: number;

  /**
   * Page size. Defaults to 30.
   */
  ps: number;

  /**
   * Total number of results.
   */
  count: number;
}

/**
 * The response object of listing all articles uploaded by a given user.
 * Example: https://api.bilibili.com/x/space/article?mid=168598&pn=1&sort=publish_time
 */
export interface ListArticleResponse {
  /**
   * 0 if no error.
   */
  code: number;

  /**
   * "0" if no error.
   */
  message: string;

  ttl: number;
  data: ListArticleData;
}
