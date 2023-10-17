import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  private dataSubject = new BehaviorSubject<any>({});
  data = this.dataSubject.asObservable();

  constructor() {
    // 在服務初始化時，嘗試從本地存儲中讀取數據
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      this.dataSubject.next(JSON.parse(storedData));
    }
  }

  setData(name: string, value: any) {
    const currentData = this.dataSubject.value;
    const updatedData = { ...currentData, [name]: value };
    this.dataSubject.next(updatedData);
    // 同時保存到本地存儲
    localStorage.setItem('myData', JSON.stringify(updatedData));
  }

  getData(name: string) {
    const currentData = this.dataSubject.value;
    return currentData[name] ?? null;
  }
}
