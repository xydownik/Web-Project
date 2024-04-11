export class Specialty {
  id: number
  name: string
  grants: number
  description:string
  disciplines: string[]
  eduPrograms: number
  demand: string
  unisNum: number
  general: number
  quota:number
  constructor(id:number, name:string, grants:number,
              description: string, disciplines: string[],
              eduPrograms: number, demand:string, unisNum:number, general:number, quota: number) {
    this.id = id
    this.name = name
    this.description = description
    this.grants = grants
    this.disciplines = disciplines
    this.eduPrograms = eduPrograms
    this.demand = demand
    this.unisNum = unisNum
    this.general = general
    this.quota=quota
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
  location: string
  grantScore: number
  paidScore: number
  constructor(id:number, name: string, photo: string, specialties: Specialty[],
              phoneNumber: string, cost: number, uniType: string, location: string,
              grantScore: number, paidScore: number) {
    this.id = id;
    this.name = name;
    this.photo = photo
    this.specialties = specialties
    this.phoneNumber = phoneNumber
    this.cost = cost
    this.location = location
    this.uniType = uniType
    this.grantScore = grantScore
    this.paidScore = paidScore


  }
}
