"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { Code2, Sparkles, ArrowRight, Check, X } from "lucide-react"

const beforeCode = `// Without Clarity Chat - 150+ lines
import { useState, useEffect, useCallback } from 'react';
import { createParser } from 'eventsource-parser';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  // Token counting logic
  const [tokenCount, setTokenCount] = useState(0);
  const MAX_TOKENS = 4096;

  // Manual streaming implementation
  const handleStream = useCallback(async (response) => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    const parser = createParser((event) => {
      if (event.type === 'event') {
        try {
          const data = JSON.parse(event.data);
          if (data.choices?.[0]?.delta?.content) {
            setMessages(prev => {
              const last = prev[prev.length - 1];
              return [
                ...prev.slice(0, -1),
                { ...last, content: last.content + data.choices[0].delta.content }
              ];
            });
          }
        } catch (e) {
          console.error('Parse error:', e);
        }
      }
    });

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        parser.feed(buffer);
        buffer = '';
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ... 100+ more lines for error handling,
  // retry logic, token management, UI state...
}`

const afterCode = `// With Clarity Chat - 12 lines
import { ClarityChat } from '@clarity-chat/react';

function ChatApp() {
  return (
    <ClarityChat
      provider="openai"
      model="gpt-4"
      tokenOptimization={{
        kvCacheAlignment: true,
        semanticCaching: true,
      }}
    />
  );
}`

const features = [
  { label: "Streaming", before: false, after: true },
  { label: "Token optimization", before: false, after: true },
  { label: "Error handling", before: false, after: true },
  { label: "Retry logic", before: false, after: true },
  { label: "Accessibility", before: false, after: true },
  { label: "Type safety", before: false, after: true },
]

export function CodeComparison() {
  const prefersReducedMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState<"before" | "after">("after")

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            <Code2 className="w-4 h-4" />
            150+ lines → 12 lines
          </span>
          <h2 className="text-headline font-bold mb-4">
            Eliminate the <span className="gradient-text">boilerplate</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Stop wrestling with streaming parsers, token counting, and error handling.
            Get production-ready AI chat with a single component.
          </p>
        </motion.div>

        {/* Comparison container */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Before */}
          <div
            className={`premium-card rounded-2xl overflow-hidden transition-all ${
              activeTab === "before" ? "ring-2 ring-red-500/50" : "opacity-60"
            }`}
            onClick={() => setActiveTab("before")}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-red-500/10">
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">
                  Without Clarity Chat
                </span>
              </div>
              <span className="text-xs text-muted-foreground">150+ lines</span>
            </div>
            <div className="h-[350px] overflow-auto p-4">
              <pre className="text-xs font-mono text-foreground" style={{ color: 'hsl(0, 0%, 70%)' }}>
                <code className="text-foreground whitespace-pre" style={{ color: 'inherit' }}>
                  {beforeCode}
                </code>
              </pre>
            </div>
          </div>

          {/* After */}
          <div
            className={`premium-card rounded-2xl overflow-hidden transition-all ${
              activeTab === "after" ? "ring-2 ring-emerald-500/50" : "opacity-60"
            }`}
            onClick={() => setActiveTab("after")}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-emerald-500/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">
                  With Clarity Chat
                </span>
              </div>
              <span className="text-xs text-muted-foreground">12 lines</span>
            </div>
            <div className="h-[350px] overflow-auto p-4 flex flex-col">
              <pre className="text-sm font-mono flex-1 text-foreground" style={{ color: 'hsl(0, 0%, 90%)' }}>
                <code className="text-foreground" style={{ color: 'inherit' }}>
                  {afterCode.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-6 text-muted-foreground/50 select-none text-right pr-3">
                        {i + 1}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightCode(line),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs text-emerald-400 flex items-center gap-2">
                  <Check className="w-3 h-3" />
                  All features included automatically
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features comparison */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="text-center p-3"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-red-400 text-xs">
                    <X className="w-3 h-3" />
                  </span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  <span className="text-emerald-400 text-xs">
                    <Check className="w-3 h-3" />
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function highlightCode(line: string): string {
  if (!line || typeof line !== "string") return ""
  
  // Escape HTML to prevent XSS
  let escaped = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

  // JSX/TSX component names (capitalized words)
  escaped = escaped.replace(
    /(&lt;)([A-Z][a-zA-Z0-9]+)(\s|&gt;)/g,
    '$1<span class="text-secondary font-semibold">$2</span>$3'
  )

  // JSX props/attributes
  escaped = escaped.replace(
    /(\s)([a-zA-Z][a-zA-Z0-9]*)(=)/g,
    '$1<span class="text-primary">$2</span>='
  )

  // JSX prop values (strings, booleans, objects)
  escaped = escaped.replace(
    /(=)(\{)([^}]+)(\})/g,
    '=<span class="text-accent">{$3}</span>'
  )
  escaped = escaped.replace(
    /(=)(&quot;)([^&]+)(&quot;)/g,
    '=<span class="text-accent">&quot;$3&quot;</span>'
  )
  escaped = escaped.replace(
    /(=)(true|false)/g,
    '=<span class="text-primary">$2</span>'
  )

  // JavaScript keywords
  escaped = escaped.replace(
    /(import|from|function|const|let|var|return|true|false|await|async|export|default|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|new|this|super|extends|class|interface|type|enum)/g,
    '<span class="text-primary">$1</span>'
  )

  // Strings (single and double quotes)
  escaped = escaped.replace(
    /(&quot;[^&]+&quot;|&#039;[^&]+&#039;)/g,
    '<span class="text-accent">$1</span>'
  )

  // Numbers
  escaped = escaped.replace(
    /(\d+)/g,
    '<span class="text-emerald-400">$1</span>'
  )

  // Comments
  escaped = escaped.replace(
    /(\/\/.+|\/\*[\s\S]*?\*\/)/g,
    '<span class="text-emerald-400 italic">$1</span>'
  )

  // Component names and hooks
  escaped = escaped.replace(
    /(ClarityChat|useChat|useStreamingChat|ChatContainer|MessageList|ChatInput|TokenOptimizer|TypingIndicator)/g,
    '<span class="text-secondary">$1</span>'
  )

  // Object/array syntax
  escaped = escaped.replace(
    /(\[|\]|\{|\})/g,
    '<span class="text-muted-foreground">$1</span>'
  )

  return escaped
}

export default CodeComparison
