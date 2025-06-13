'use client'

interface StatusDisplayProps {
  status: string
}

export function StatusDisplay({ status }: StatusDisplayProps) {
  if (!status) return null
  return (
    <div className="text-sm text-muted-foreground mb-2 text-center">{status}</div>
  )
} 