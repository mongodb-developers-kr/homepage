/**
 * 공용 CACHE 클라이언트
 *
 * VITE_CACHE_API 환경 변수를 사용하여 KV 캐시 API와 통신합니다.
 * 확장 가능한 구조로 설계되어 새로운 엔드포인트를 쉽게 추가할 수 있습니다.
 */

const getBaseUrl = (): string => {
  const apiUrl = import.meta.env.VITE_CACHE_API

  if (!apiUrl) {
    throw new Error(
      'VITE_CACHE_API environment variable is not set. Please add VITE_CACHE_API to your .env file.',
    )
  }

  // URL 끝에 슬래시가 있으면 제거
  return apiUrl.replace(/\/$/, '')
}

export interface CacheClientConfig {
  baseUrl?: string
  timeout?: number
}

export class CacheClient {
  private baseUrl: string | null
  private timeout: number
  private configBaseUrl?: string

  constructor(config: CacheClientConfig = {}) {
    this.configBaseUrl = config.baseUrl
    this.baseUrl = config.baseUrl || null
    this.timeout = config.timeout || 10000
  }

  private getBaseUrl(): string {
    if (this.configBaseUrl) {
      return this.configBaseUrl
    }
    if (this.baseUrl) {
      return this.baseUrl
    }
    // 실제 사용 시점에 환경 변수 체크
    this.baseUrl = getBaseUrl()
    return this.baseUrl
  }

  /**
   * GET 요청을 수행합니다.
   *
   * @param endpoint - API 엔드포인트 (예: 'groups:all')
   * @returns Promise<T> - 응답 데이터
   */
  async get<T>(endpoint: string): Promise<T> {
    const url = `${this.getBaseUrl()}/${endpoint}`

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)

      const response = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`,
        )
      }

      const data = await response.json()
      return data as T
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error(`Request timeout after ${this.timeout}ms`)
        }
        throw error
      }
      throw new Error('Unknown error occurred during API request')
    }
  }

  /**
   * POST 요청을 수행합니다.
   *
   * @param endpoint - API 엔드포인트
   * @param body - 요청 본문
   * @returns Promise<T> - 응답 데이터
   */
  async post<T>(endpoint: string, body: unknown): Promise<T> {
    const url = `${this.getBaseUrl()}/${endpoint}`

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)

      const response = await fetch(url, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`,
        )
      }

      const data = await response.json()
      return data as T
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error(`Request timeout after ${this.timeout}ms`)
        }
        throw error
      }
      throw new Error('Unknown error occurred during API request')
    }
  }
}

// 싱글톤 인스턴스 생성
// 환경 변수는 실제 API 호출 시점에 체크됩니다
export const cacheClient = new CacheClient()
