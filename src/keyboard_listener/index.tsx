import React from 'react'

interface Props {}

type KeyboardEventHandler = (event: KeyboardEvent) => void

export function useEventListener(eventName: 'keyup' | 'keydown', handler: KeyboardEventHandler) {
  // Create a ref that stores handler
  const savedHandler = React.useRef<KeyboardEventHandler>()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  React.useEffect(() => {
    console.log('UPDATING HANDLER')
    savedHandler.current = handler
  }, [handler])

  React.useEffect(
    () => {
      console.log('UPDATING LISTENER')
      // Create event listener that calls handler function stored in ref
      const eventListener = (event: KeyboardEvent) =>
        savedHandler.current && savedHandler.current(event)

      // Add event listener
      window.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener(eventName, eventListener)
      }
    },
    [eventName] // Re-run if eventName or element changes
  )
}

export const KeyboardListener: React.FC<Props> = (props: Props) => {
  const [word, setWord] = React.useState<string>('')

  useEventListener(
    'keydown',
    React.useCallback(
      (event: KeyboardEvent) => {
        console.log(
          `handleKeyboardEvents() ${event.key}, shift? ${event.shiftKey}, alt? ${event.altKey}, meta? ${event.metaKey}`
        )
        if (event.key === 'Escape') {
          setWord('')
        } else if (event.key >= 'a' && event.key <= 'z') {
          setWord(word + event.key)
        }
      },
      [word]
    )
  )

  return (
    <div>
      <h2>Other Hooks to support Keyboard Listener Logic</h2>
      <p>{word}</p>
    </div>
  )
}
