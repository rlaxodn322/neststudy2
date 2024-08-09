import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ApiService {
  private readonly apiKey: string = 'b4c34b46528844819545b920f7f392cd';
  private readonly baseUrl: string = 'https://openapi.gg.go.kr/Publtolt';

  constructor(private readonly httpService: HttpService) {}

  getData(
    pIndex: number = 2,
    pSize: number = 1000,
    type: string = 'json',
  ): Observable<any> {
    const url = `${this.baseUrl}?KEY=${this.apiKey}&Type=${type}&pIndex=${pIndex}&pSize=${pSize}`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
  getData1(
    pIndex: number = 1,
    pSize: number = 1000,
    type: string = 'json',
  ): Observable<any> {
    const url = `${this.baseUrl}?KEY=${this.apiKey}&Type=${type}&pIndex=${pIndex}&pSize=${pSize}`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
