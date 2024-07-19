declare module '@obi-tec/logger-console' {
  type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'request' | 'none';

  interface Request {
    cookies?: Record<string, string>,
    url: string;
    method: string;
    message?: string;
    headers?: Record<string, string>;
    body?: string;
    params?: Record<string, string>;
    query?: Record<string, string>;
    custom?: Record<string, string>;
  }

  export function debug(message: string, details?: any): void;
  export function info(message: string, details?: any): void;
  export function warn(message: string, details?: any): void;
  export function error(message: string, error?: any): void;
  export function request(request: Request): void;

  export const logLevels: Record<LogLevel, number>;
  export const level: LogLevel;
}