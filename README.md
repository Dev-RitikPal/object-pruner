# Object Pruner

🚀 A powerful TypeScript utility and CLI tool to **deeply prune JavaScript/JSON objects** — removing `null`, `undefined`, empty strings, arrays, and objects — with full customization.

---

## 🔧 Features

- ✅ Deep recursive pruning
- ✅ Selective pruning (`null`, `undefined`, `""`, `{}`, `[]`)
- ✅ Returns both cleaned object and pruned values
- ✅ Fully typed for TypeScript projects
- ✅ CLI support with advanced flags
- ✅ Unit tested using Vitest

---

## 📦 Installation

### Local (as a module)

```bash
npm install /path/to/object-pruner
```

---

## 📥 Usage (Code)

```ts
import { ObjectPruner } from 'object-pruner';

const input = {
  name: "",
  age: null,
  email: "john@example.com",
  details: {
    bio: "",
    hobbies: [],
    preferences: {
      theme: "dark",
      language: ""
    }
  }
};

const pruner = new ObjectPruner({ returnPrunedValues: true });
const result = pruner.prune(input);

console.log(result.cleaned);
console.log(result.pruned);
```

---

## 🖥 CLI Usage

### Basic

```bash
node dist/cli.js test.json
```

### With Flags

```bash
node dist/cli.js test.json --only null,undefined,emptyArray --dry-run
```

### Flags

| Flag          | Description                                      |
|---------------|--------------------------------------------------|
| `--only`      | Prune specific types: `null,undefined,emptyArray`|
| `--dry-run`   | Do not overwrite the original file               |

---

## 🧪 Running Tests

```bash
npm install
npm run build
npm run test
```

---

## 📁 Folder Structure

```
src/
  index.ts
  cli.ts
  core/
    Pruner.ts
    types.ts
    utils.ts
tests/
  pruner.test.ts
```

---

## 🧠 Author

Made with ❤️ by Ritik Pal

---

## 📄 License

MIT
