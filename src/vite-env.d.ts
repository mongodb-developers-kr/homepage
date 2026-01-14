/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CACHE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
