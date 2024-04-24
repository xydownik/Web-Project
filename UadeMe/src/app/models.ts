export interface Specialty {
  id: number
  name: string
  grants: number
  description: string
  disciplines: Discipline[]
  demand: string
  unisNum: number
  general: number
  quota: number
  photo: string
  code: string

}
export interface University{
  id: number;
  name: string;
  photo:string;
  specialties: Specialty[]
  phoneNumber: string
  cost: number
  uniType: string
  location: City
  floorScore: number
  address: string
  code: string
  link: string
  description: string

}

export interface Discipline{
  id: number
  name: string
}

export interface City{
  id: number
  city: string
}

export interface Consultant{
  id: number,
  name: string,
  profession: string,
  phone: string,
  telegram: string
  whatsApp: string,
  insta: string,
  mail: string
  photo: string,
  rating: number
}
