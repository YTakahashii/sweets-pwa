export type Shop = {
  id: number;
  name: string;
  description: string;
  area: string;
  postcode: string;
  address: string;
  openingHoursSpecification: string;
  closed: string;
  parking: string;
  eatin: string;
  email: string;
  url: string;
  latitude: string;
  longitude: string;
  imagePath: string;
  telephone: string;
  created_at: string;
  updated_at: string;
};

export type GetShopsResponse = {
  shops: Shop[];
};
