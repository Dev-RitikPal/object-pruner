export interface PruneOptions {
    pruneNull?: boolean;
    pruneUndefined?: boolean;
    pruneEmptyString?: boolean;
    pruneEmptyArray?: boolean;
    pruneEmptyObject?: boolean;
    returnPrunedValues?: boolean;
  }
  
  export interface PruneResult<T> {
    cleaned: T;
    pruned: any[];
  }
  