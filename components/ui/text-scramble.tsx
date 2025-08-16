'use client';
import { useEffect, useState } from 'react';

type TextScrambleProps = {
  /** 表示するテキスト（必ずプレーンな文字列） */
  children: string;
  /** 1回のスクランブル時間（秒） */
  duration?: number;
  /** 文字を入れ替えるステップ間隔（秒） */
  speed?: number;
  /** 置換に使う文字集合 */
  characterSet?: string;
  /** レンダリングタグ */
  as?: React.ElementType;
  className?: string;
  /** true の間だけスクランブルを実行（無限ループは親側で切替） */
  trigger?: boolean;
  /** 完了コールバック */
  onScrambleComplete?: () => void;
  /** ホバーで再実行したい時用（任意） */
  onHoverStart?: () => void;
};

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  as: Component = 'span',
  className,
  trigger = true,
  onScrambleComplete,
  onHoverStart,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  useEffect(() => {
    if (!trigger || isAnimating) return;

    setIsAnimating(true);
    const steps = Math.max(1, Math.round(duration / speed));
    let step = 0;

    const id = setInterval(() => {
      const progress = step / steps;
      let out = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          out += ' ';
          continue;
        }
        // 左から順に確定していく
        if (progress * text.length > i) {
          out += text[i];
        } else {
          out += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(out);
      step++;

      if (step > steps) {
        clearInterval(id);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);

    return () => clearInterval(id);
    // children が変わった時はリセット
  }, [trigger, children, duration, speed, characterSet]);

  return (
    <Component
      className={className}
      onMouseEnter={onHoverStart}
      aria-label={text}
    >
      {displayText}
    </Component>
  );
}