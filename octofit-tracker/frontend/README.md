# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## API configuration

The frontend uses Vite environment variables through `import.meta.env`.

Define `VITE_CODESPACE_NAME` in `.env.local` when running in GitHub Codespaces:

```text
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is defined, API requests use:

```text
https://your-codespace-name-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is not set, the app safely falls back to local backend URLs such as:

```text
http://localhost:8000/api/users/
```
