'use client'

import { useState, FormEvent } from 'react'

interface TextInputProps {
  onSubmit: (text: string) => void
  disabled?: boolean
}

export function TextInput({ onSubmit, disabled }: TextInputProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onSubmit(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled}
        className="flex-1 border rounded px-3 py-2 text-sm bg-background"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
      >
        Send
      </button>
    </form>
  )
} 