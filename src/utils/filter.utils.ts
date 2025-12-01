import { FilterKey } from "@/types/manar/Filter.type"

export function getActiveFilterKey(values: Record<FilterKey, string | null>): FilterKey | null {
  const entry = Object.entries(values).find(([, value]) => !!value)
  return (entry?.[0] as FilterKey) ?? null
}