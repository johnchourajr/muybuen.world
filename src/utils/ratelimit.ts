// utils/rateLimit.ts

interface RateLimitInfo {
  count: number
  timestamp: number
}

const rateLimitStore = new Map<string, RateLimitInfo>()
const MAX_REQUESTS = 100
const TIME_WINDOW = 15 * 60 * 1000 // 15 minutes

export function rateLimit(ip: string): boolean {
  const currentTime = Date.now()
  const limitInfo = rateLimitStore.get(ip)

  if (!limitInfo) {
    rateLimitStore.set(ip, { count: 1, timestamp: currentTime })
    return false
  }

  if (currentTime - limitInfo.timestamp > TIME_WINDOW) {
    rateLimitStore.set(ip, { count: 1, timestamp: currentTime })
    return false
  }

  if (limitInfo.count >= MAX_REQUESTS) {
    return true // Rate limit exceeded
  }

  rateLimitStore.set(ip, { ...limitInfo, count: limitInfo.count + 1 })
  return false
}
