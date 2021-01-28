export interface SearchResponse<SearchType> {
  /**
   * 0 if no error.
   */
  code: number;

  /**
   * "0" if no error.
   */
  message: string;

  ttl: number;
  data: SearchType;
}
