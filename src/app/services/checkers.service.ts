import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {ClientHttpInterceptor} from './clienthttp.interceptor';
import {Time} from '@angular/common';

export class AppResponse<T> {
  data: T;
  description: string;
  exception: string;
  isSuccessful: boolean;
  statusCode: number;
  statusMessage: string;
}

export interface IAuthRes {
  gameId: string;
  playerId: string;
  playerIndex: number;
  accessToken: string;
  accessTokenExpiration: Date;
  refreshToken: string;
  refreshTokenExpiration: Date;
}

export interface IBoard {
  squares: Isquare[];
}

export interface IPosition {
  x: number;
  y: number;
  boardX: number;
  boardY: number;
}

export interface IShortPosition {
  x: number;
  y: number;
}

export interface Isquare {
  isValid: boolean;
  isEmpty: boolean;
  position: IPosition;
  chip: IChip;
  playerId: number;
}

export interface IChip {
  id: number;
  type: number;
  value: number;
  isCaptured: boolean;
  isBounty: boolean;
  square: Isquare;
  player: IPlayer;
}

export interface IPlayer {
  id: string;
  index: number;
  location: number;
  chips: IChip[];
  capturedChips: IChip[];
  turnCount: number;
  score: number;
}

export interface IState {
  id: string;
  version: number;
  board: IBoard;
  players: IPlayer[];
  currentPlayerIndex: number;
  turnCount: number;
  turnClock: Time;
  gameClock: Time;
  moneyPot: number;
}

export interface IVersion {
  version: number;
  turnClock: Time;
  gameClock: Time;
}

export interface IMoveRequest {
  chipId: number;
  nextPositions: IShortPosition[];
}
@Injectable({
  providedIn: 'root'
})
export class CheckersService {
  public static currentVersion = 0;
  public connectionHeaders: {
    authorization: string;
    refreshToken: string;
  };
  public playerIndex: number;
  serverUrl: string = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }
  public connectToGame(gameId: string, playerId: string): Observable<IAuthRes> {
    return this.post<IAuthRes>('Game/Connect', {gameId, playerId}).pipe(
      tap((res) => {
        this.playerIndex = res.playerIndex;
        this.connectionHeaders = {
          refreshToken: res.refreshToken,
          authorization: 'Bearer ' + res.accessToken
        };
      })
    );
  }

  public move(move: IMoveRequest): Observable<IState> {
    return this.post<IState>('Game/Move', move);
  }

  public version(): Observable<IVersion> {
    return this.get<IVersion>('Game/Version');
  }

  public state(): Observable<IState> {
    return this.get<IState>('Game/State');
  }

  public post<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.post<AppResponse<T>>(url, body, options).pipe(map(res => res.data));
  }

  get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.get<AppResponse<T>>(url, options).pipe(map(res => res.data));
  }

  delete<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.delete<AppResponse<T>>(url, options).pipe(map(res => res.data));
  }

  put<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.put<AppResponse<T>>(url, body, options).pipe(map(res => res.data));
  }
}
