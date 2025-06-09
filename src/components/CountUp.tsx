// @components/CountUp.tsx
'use client'

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
  to: number
  from?: number
  decimals?: number           // <-- 支持小数位
  decimal?: string            // <-- 小数点符号
  separator?: string          // <-- 分隔符
  duration?: number
  delay?: number
  direction?: "up"|"down"
  className?: string
  startWhen?: boolean
  onStart?: () => void
  onEnd?: () => void
}

export default function CountUp({
  to,
  from = 0,
  decimals = 0,
  decimal = ".",
  separator = "",
  duration = 2,
  delay = 0,
  direction = "up",
  className = "",
  startWhen = true,
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? to : from)
  const spring = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  })
  const inView = useInView(ref, { once: true })

  // 初始渲染
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = (direction === "down" ? to : from)
        .toFixed(decimals)
    }
  }, [to, from, direction, decimals])

  // 触发动画
  useEffect(() => {
    if (inView && startWhen) {
      onStart?.()
      const t1 = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to)
      }, delay * 1000)
      const t2 = setTimeout(() => onEnd?.(), (delay + duration) * 1000)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [inView, startWhen, motionValue, direction, from, to, delay, duration, onStart, onEnd])

  // 每次 spring 更新时，格式化并输出
  useEffect(() => {
    const unsubscribe = spring.on("change", latest => {
      if (!ref.current) return
      // 保留指定小数位
      const fixed = latest.toFixed(decimals)
      // 用 Intl.NumberFormat 格式化千分位和小数
      const formatted = new Intl.NumberFormat("en-US", {
        useGrouping: !!separator,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(Number(fixed))

      // 如果自定义了 separator，就把默认的 “,” 替换
      ref.current.textContent = separator
        ? formatted.replace(/,/g, separator)
        : formatted
    })
    return () => unsubscribe()
  }, [spring, decimals, separator])

  return <span ref={ref} className={className} />
}
