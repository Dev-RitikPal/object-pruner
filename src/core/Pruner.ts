import { PruneOptions, PruneResult } from './types';
import { isPrunable, defaultOptions } from './utils';

export class ObjectPruner {
  private options: PruneOptions;
  private prunedValues: any[];

  constructor(options?: PruneOptions) {
    this.options = { ...defaultOptions, ...options };
    this.prunedValues = [];
  }

  public prune<T>(input: T): T | PruneResult<T> {
    this.prunedValues = [];
    const cleaned = this.deepPrune(input);

    if (this.options.returnPrunedValues) {
      return {
        cleaned,
        pruned: this.prunedValues
      };
    }

    return cleaned;
  }

  private deepPrune(value: any): any {
    if (Array.isArray(value)) {
      const result = value.map(item => this.deepPrune(item)).filter(item => !isPrunable(item, this.options));
      if (isPrunable(result, this.options)) this.prunedValues.push(value);
      return result;
    }

    if (typeof value === 'object' && value !== null) {
      const result: any = {};
      for (const key in value) {
        const pruned = this.deepPrune(value[key]);
        if (!isPrunable(pruned, this.options)) {
          result[key] = pruned;
        } else {
          this.prunedValues.push({ [key]: value[key] });
        }
      }
      if (isPrunable(result, this.options)) this.prunedValues.push(value);
      return result;
    }

    if (isPrunable(value, this.options)) {
      this.prunedValues.push(value);
    }

    return value;
  }
}
