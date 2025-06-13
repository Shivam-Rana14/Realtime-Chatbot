'use client'

import { useTranslations } from '@/components/translations-context'

interface BroadcastButtonProps {
  isSessionActive: boolean
  onClick: () => void
}

export function BroadcastButton({ isSessionActive, onClick }: BroadcastButtonProps) {
  const { t } = useTranslations()
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-md font-medium transition-colors
        ${isSessionActive ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
    >
      {isSessionActive ? t('broadcast.end') : t('broadcast.start')}
    </button>
  )
} 