# Houdini Sponsors

![Sponsors](https://raw.githubusercontent.com/HoudiniGraphql/sponsors/main/generated/sponsors.svg)

### How update sponsors assets?

Call the workflow with the following command:

_`<YOUR-TOKEN>` Requires the `repo` scope._

```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/HoudiniGraphql/sponsors/actions/workflows/generate.yml/dispatches \
  -d '{"ref":"main"}'
```
