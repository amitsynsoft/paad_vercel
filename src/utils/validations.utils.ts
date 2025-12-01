export const isMax50 = (value: string) => value.trim().length <= 50
export const isMax100 = (value: string) => value.trim().length <= 100
export const isMax300 = (value: string) => value.trim().length <= 300

export const isValidPhoneNumber = (value: string) => /^\+?[\d-]{6,15}$/.test(value)

export const isValidEmail = (value: string) => value.length <= 100 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
