import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ApiService {
  private readonly apiKey: string = process.env.API_KEY || 'default_api_key';
  private readonly baseUrl: string = process.env.BASE_URL || 'default_base_url';

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
