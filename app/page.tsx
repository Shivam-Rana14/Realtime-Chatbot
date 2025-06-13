"use client"

import { useEffect, useRef } from "react"
import useWebRTCAudioSession from "@/hooks/use-webrtc"
import { BroadcastButton } from "@/components/broadcast-button"
import { StatusDisplay } from "@/components/status"
import { TextInput } from "@/components/text-input"
import { motion } from "framer-motion"

export default function ChatPage() {
  const voice = "ash" // fixed voice

  const {
    status,
    isSessionActive,
    handleStartStopClick,
    conversation,
    sendTextMessage,
  } = useWebRTCAudioSession(voice)

  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation])

  return (
    <main className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full max-w-md space-y-6">
        <StatusDisplay status={status} />

        {/* Conversation list */}
        <div className="h-[60vh] overflow-y-auto rounded-lg border p-4 space-y-3 bg-card">
          {conversation.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[75%] whitespace-pre-wrap text-sm md:text-base
                ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border"}`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Controls */}
        <BroadcastButton
          isSessionActive={isSessionActive}
          onClick={handleStartStopClick}
        />

        <TextInput onSubmit={sendTextMessage} disabled={!isSessionActive} />
      </div>
    </main>
  )
}