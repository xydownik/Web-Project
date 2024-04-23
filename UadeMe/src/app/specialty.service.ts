import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialty, University} from "./models";
import {DisciplineService} from "./discipline.service";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  BASE_URl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient: HttpClient) {

  }
  static constList = [
    {
      id : 1,
      name : 'Management',
      grants: 1000,
      description:'Менеджмент (англ. management — управление, система управления) — это совокупность ' +
        'современных технологий, принципов, методов, средств и форм управления, направленных на повышение ' +
        'эффективности работы различных предприятий.\n' +
        'Менеджмент представляется в качестве процесса, окончанием или же его результативной точкой является' +
        ' конкретный результат в виде полученной продукции и достигнутых результатов.',
      disciplines: [DisciplineService.constList[2],DisciplineService.constList[3]],
      eduPrograms:120,
      demand:'высокий',
      unisNum: 70,
      general: 80,
      quota : 70,
      photo: "https://smashinghub.com/wp-content/uploads/2021/02/Sales-Team-Training-Tips-1.jpeg"
    },
    {
      id : 2,
      name : 'IT',
      grants: 3000,
      description:'"Информационно-коммуникационные технологии" фокусируется\n' +
        '          на изучении разработки, применения и управления информационными\n' +
        '          системами и технологиями. Обучение включает в себя изучение программирования,\n' +
        '          сетевых технологий, баз данных, веб-разработки, кибербезопасности и других\n' +
        '          аспектов информационной технологии. Выпускники этой специальности могут\n' +
        '          работать в различных сферах, таких как разработка программного обеспечения,\n' +
        '          администрирование сетей, информационная безопасность, интернет-маркетинг,\n' +
        '          аналитика данных и др.',
      disciplines: [DisciplineService.constList[0],DisciplineService.constList[1]],
      eduPrograms:120,
      demand:'высокий',
      unisNum: 72,
      general: 90,
      quota : 60,
      photo: "/assets/images/IT.png"
    },

  ]
  getSpecialtiesObservable(): Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${this.BASE_URl}`)
  }
  getSpecialties(){
    return SpecialtyService.constList
  }

}
