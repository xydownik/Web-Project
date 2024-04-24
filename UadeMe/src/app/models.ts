export class Specialty {
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

  constructor(id: number, name: string, grants: number, description: string, disciplines: Discipline[],
              eduPrograms: number, demand: string, unisNum: number, general: number, quota: number, photo: string) {
    this.id = id
    this.name = name
    this.grants = grants
    this.description = description
    this.disciplines = disciplines
    this.eduPrograms = eduPrograms
    this.demand = demand
    this.unisNum = unisNum
    this.general = general
    this.quota = quota
    this.photo = photo
  }

}
export class University{
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

  constructor(id: number, name: string, photo: string, specialties: Specialty[], phoneNumber: string, cost: number,
              uniType: string, location: City, grantScore: number, paidScore: number, address: string) {
    this.id = id
    this.name = name
    this.photo = photo
    this.specialties = specialties
    this.phoneNumber = phoneNumber
    this.cost = cost
    this.uniType = uniType
    this.location = location
    this.grantScore = grantScore
    this.paidScore = paidScore
    this.address = address
  }

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
