export type LargeCategory = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type SmallCategory = {
  id: number;
  name: string;
  large_category_id: number;
  created_at: string;
  updated_at: string;
};

export type GetLargeCategoryResponse = {
  largeCategories: LargeCategory[];
};

export type GetSmallCategoryResponse = {
  smallCategories: SmallCategory[];
};
