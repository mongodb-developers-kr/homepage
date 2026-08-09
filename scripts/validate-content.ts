/**
 * content/*.json 을 스키마로 검증하는 Vite 플러그인입니다.
 * 검증에 실패하면 개발 서버 기동과 빌드가 모두 중단됩니다.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'
import { contentSchemas } from '../src/shared/content/schema'

const CONTENT_DIR = 'content'

const formatIssues = (fileName: string, error: { issues: readonly unknown[] }) => {
  const lines = (error.issues as { path: PropertyKey[]; message: string }[]).map(
    (issue) => {
      const path = issue.path.length ? issue.path.join('.') : '(root)'
      return `  - ${path}: ${issue.message}`
    },
  )
  return [`${CONTENT_DIR}/${fileName} 검증 실패`, ...lines].join('\n')
}

export function validateContent(root: string) {
  const failures: string[] = []

  for (const [fileName, schema] of Object.entries(contentSchemas)) {
    const filePath = join(root, CONTENT_DIR, fileName)

    let parsed: unknown
    try {
      parsed = JSON.parse(readFileSync(filePath, 'utf-8'))
    } catch (error) {
      failures.push(
        `${CONTENT_DIR}/${fileName} 을(를) 읽을 수 없습니다: ${
          error instanceof Error ? error.message : String(error)
        }`,
      )
      continue
    }

    const result = schema.safeParse(parsed)
    if (!result.success) {
      failures.push(formatIssues(fileName, result.error))
    }
  }

  if (failures.length > 0) {
    throw new Error(`\n\n${failures.join('\n\n')}\n`)
  }
}

export function contentValidation(): Plugin {
  let root = process.cwd()

  return {
    name: 'mug-content-validation',
    configResolved(config) {
      root = config.root
    },
    buildStart() {
      validateContent(root)
    },
  }
}
