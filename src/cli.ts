#!/usr/bin/env node
import { ObjectPruner } from './core/Pruner';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: object-pruner <path-to-json-file>');
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), args[0]);

try {
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const json = JSON.parse(rawData);

  const pruner = new ObjectPruner({ returnPrunedValues: true });
  const result = pruner.prune(json);

  console.log('Cleaned Object:', JSON.stringify(result.cleaned, null, 2));
  console.log('Pruned Values:', JSON.stringify(result.pruned, null, 2));
} catch (err) {
  if (err instanceof Error) {
    console.error('Error:', err.message);
  } else {
    console.error('Error:', err);
  }
  process.exit(1);
}
