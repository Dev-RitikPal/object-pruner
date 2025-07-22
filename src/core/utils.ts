import { PruneOptions } from "./types";

export function isPrunable(value: any, options: PruneOptions): boolean {
  if (options.pruneNull && value === null) return true;
  if (options.pruneUndefined && value === undefined) return true;
  if (options.pruneEmptyString && typeof value === 'string' && value.trim() === '') return true;
  if (options.pruneEmptyArray && Array.isArray(value) && value.length === 0) return true;
  if (options.pruneEmptyObject && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) return true;
  return false;
}

export const defaultOptions: PruneOptions = {
  pruneNull: true,
  pruneUndefined: true,
  pruneEmptyString: true,
  pruneEmptyArray: true,
  pruneEmptyObject: true,
  returnPrunedValues: false
};
