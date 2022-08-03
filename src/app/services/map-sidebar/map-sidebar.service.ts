import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapSidebarService {

  // filtersToMapChange$ = new EventEmitter<String[]>();
  changeLayerMap$ = new EventEmitter<string>();

  idItemToMap$ = new EventEmitter<number>();

  private dataToLocalProductLayer = new BehaviorSubject<any>([]);
  dataToLocalProductLayer$ = this.dataToLocalProductLayer.asObservable();

  private changeLayerOnMap = new BehaviorSubject<string>('local');
  changeLayerOnMap$ = this.changeLayerOnMap.asObservable();

  private filtersToMapChanges = new BehaviorSubject<string[]>([]);
  filtersToMapChanges$ = this.filtersToMapChanges.asObservable();

  private orderByLocation = new Subject();
  orderByLocationChanges$ = this.orderByLocation.asObservable();


  private filtersToMapChangesWalking = new BehaviorSubject<string[]>([]);
  filtersToMapChangesWalking$ = this.filtersToMapChangesWalking.asObservable();

  private formDetailPage = new BehaviorSubject<boolean>(false);
  formDetailPage$ = this.formDetailPage.asObservable();

  constructor() { }

  filtersToMap(data): void {
    this.filtersToMapChanges.next(data);
  }

  orderDataByLocation(data): void {
    this.orderByLocation.next(data);
  }

  filtersToMapWalking(data): void {
    this.filtersToMapChangesWalking.next(data);
  }


  detailPage(data): void {
    this.formDetailPage.next(data);
  }

  changeLayer(data): void {
    this.changeLayerOnMap.next(data);
  }


  sendDataFromMap(data): void {
    this.dataToLocalProductLayer.next(data);
  }

}



