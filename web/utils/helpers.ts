/**
 * Format date to Dutch locale
 */
export const formatDateDutch = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

/**
 * Format date and time to Dutch locale
 */
export const formatDateTimeDutch = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate password strength
 */
export const validatePassword = (password: string): {
  isValid: boolean
  strength: 'weak' | 'medium' | 'strong'
  messages: string[]
} => {
  const messages: string[] = []
  let strength: 'weak' | 'medium' | 'strong' = 'weak'

  if (password.length < 8) {
    messages.push('Wachtwoord moet minstens 8 karakters lang zijn')
  }

  if (!/[a-z]/.test(password)) {
    messages.push('Voeg kleine letters toe')
  }

  if (!/[A-Z]/.test(password)) {
    messages.push('Voeg hoofdletters toe')
  }

  if (!/[0-9]/.test(password)) {
    messages.push('Voeg getallen toe')
  }

  if (!/[^a-zA-Z0-9]/.test(password)) {
    messages.push('Voeg speciale karakters toe')
  }

  if (messages.length === 0) {
    strength = 'strong'
  } else if (messages.length <= 2) {
    strength = 'medium'
  }

  return {
    isValid: messages.length === 0,
    strength,
    messages,
  }
}

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Truncate string to specified length
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str
  return `${str.substring(0, length)}...`
}

/**
 * Calculate completion percentage
 */
export const calculateProgress = (completed: number, total: number): number => {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}

/**
 * Dutch month names
 */
export const dutchMonths = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
]

/**
 * Dutch day names
 */
export const dutchDays = [
  'Zondag',
  'Maandag',
  'Dinsdag',
  'Woensdag',
  'Donderdag',
  'Vrijdag',
  'Zaterdag',
]

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`
}

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Sleep for specified milliseconds
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
