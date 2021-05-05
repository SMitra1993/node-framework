/** Defines a common failed response error object. */
export interface IError {
  /** The error status code (if applicable), to return to the caller. */
  statusCode: number;

  /** The error name. */
  name: string;

  /** The descriptive error message(s). */
  message: string | object;

  /** The error source or stack trace to be included for logging purposes only. */
  source?: string;

  /** The error code. Used for generic compatibility. */
  code?: number;

  /** The error body. Used for generic compatibility. */
  body?: string;
}
