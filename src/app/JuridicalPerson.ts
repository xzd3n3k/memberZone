export interface JuridicalPerson {
  id?: number;
  registration_number: string;
  company: string;
  street: string;
  post_code: string;
  zip_code: string;
  city: string;
  country: string;
  province: string;
  email: string;
  contact_person: string;
  phone: string;
  active: boolean;
  payed: boolean;
  ico: string;
}
