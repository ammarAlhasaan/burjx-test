export type Pagination<T> = {
  data: T;
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};
