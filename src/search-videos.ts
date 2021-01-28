import { SearchResponse } from './search-response';
import { NumericBoolean } from './util';

export interface VideoTagStats {
  /**
   * Tag ID.
   */
  tid: number;
  /**
   * Total number of videos with this tag.
   */
  count: number;
  name: string;
}

export interface Video {
  comment: number;
  typeid: number;
  play: number;
  pic: string;
  subtitle: string;
  description: string;
  copyright: string;
  title: string;
  review: number;
  author: string;
  mid: number;
  created: number;
  length: string;
  video_review: number;
  aid: number;
  bvid: string;
  hide_click: boolean;
  is_pay: NumericBoolean;
  is_union_video: NumericBoolean;
  is_steins_gate: NumericBoolean;
}

export interface SearchVideoList {
  /**
   * A map from TID to the {@link VideoTagStats} object.
   */
  tlist: Record<number, VideoTagStats>;
  vlist: Video[];
}

export interface PageInfo {
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

export interface EpisodicButtonData {
  text: string;
  uri: string;
}

export interface SearchVideoData {
  list: SearchVideoList;
  page: PageInfo;
  episodic_button: EpisodicButtonData;
}

/**
 * The response object of searching for all articles uploaded by a given user.
 * Example: https://api.bilibili.com/x/space/arc/search?mid=168598&pn=1&order=pubdate
 */
export type SearchVideoResponse = SearchResponse<SearchVideoData>;
