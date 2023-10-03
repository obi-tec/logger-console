declare module '@obi-tec/logger-console' {
  type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'request' | 'none';

  interface Request {
    url: string;
    method: string;
    headers: Record<string, string>;
    body: string;
    params: Record<string, string>;
    query: Record<string, string>;
  }

  export function debug(message: string, details?: any): void;
  export function info(message: string, details?: any): void;
  export function warn(message: string, details?: any): void;
  export function error(message: string, error?: any): void;
  export function request(request: Request): void;

  export const logLevels: Record<LogLevel, number>;
  export const level: LogLevel;
}