export interface PhysicalPerson {
  id?: number;
  registration_number: string;
  first_name: string;
  last_name: string;
  subject_of_business: string;
  ares: string;
  title: string;
  street: string;
  post_code: string;
  zip_code: string;
  city: string;
  country: string;
  province: string;
  email: string;
  phone: string;
  active: boolean;
  payed: boolean;
  ico: string;
}
