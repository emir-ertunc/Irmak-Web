export class DataQueryError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = "DataQueryError";
  }
}

export function toDataQueryError(message: string, cause?: unknown) {
  return new DataQueryError(message, cause);
}
