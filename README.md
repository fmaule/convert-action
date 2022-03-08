# convert-action

This is a single purpose CLI that rewrites the `runs` section in a GitHub Action `action.yml` file, replacing the current contents with the following:

```yaml
runs:
  using: node16
  main: dist/index.js
```

## Usage
`npx @fmaule/convert-action [runner] [filename] [compiled.js]`

By default it will update `action.yml`, set `main` to `dist/index.js` and use `node16` runner.

```bash
npx @fmaule/convert-action
```

You can set the `runner` by passing an additional parameter:

```bash
npx @fmaule/convert-action node14
```

You can set the value for `main` by passing an additional parameter:

```bash
npx @fmaule/convert-action index.dist.js
```

You can also change the filename to read:

```bash
npx @fmaule/convert-action dist/index.js my-subfolder/action.yml
```
