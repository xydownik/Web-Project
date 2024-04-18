export interface Specialty {
  id: number
  name: string
  grants: number
  description: string
  disciplines: Discipline[]
  eduPrograms: number
  demand: string
  unisNum: number
  general: number
  quota: number
  photo: string




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
  grantScore: number
  paidScore: number
  address: string

}

export interface Discipline{
  id: number
  name: string
}

export interface City{
  id: number
  city: string
}
