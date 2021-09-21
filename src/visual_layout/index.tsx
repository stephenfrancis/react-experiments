import React from 'react'

interface Props {}

type ExperimentMode = 'simple' | 'scroll_outer' | 'scroll_parent'

const getScrollParent = (node: Node): Node | null => {
  const isElement = node instanceof HTMLElement
  const overflowY = isElement && window.getComputedStyle(node).overflowY
  const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden'

  if (isScrollable && (node as HTMLElement).scrollHeight >= (node as HTMLElement).clientHeight) {
    return node
  }
  return (node.parentNode && getScrollParent(node.parentNode)) || document.body
}

const Main: React.FC<Props> = (props: Props) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [experimentMode, setExperimentMode] = React.useState<ExperimentMode>('simple')
  const [scrollingNodeText, setScrollingNodeText] = React.useState<string>('<unknown>')
  React.useEffect(() => {
    const interval = setInterval(() => {
      const scrollingNode = divRef.current ? getScrollParent(divRef.current) : null
      if (!scrollingNode) {
        setScrollingNodeText('<unknown>')
      } else {
        if (scrollingNode instanceof HTMLElement) {
          setScrollingNodeText(scrollingNode.getAttribute('id') || scrollingNode.tagName)
        } else {
          setScrollingNodeText('<non-element node>')
        }
      }
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const onRadioChange = (newValue: ExperimentMode) => {
    setExperimentMode(newValue)
  }

  const renderRadio = (id: ExperimentMode, label: string) => {
    return (
      <>
        <input
          checked={experimentMode === id}
          onChange={onRadioChange.bind(null, id)}
          type="radio"
          id={id}
        />
        <label htmlFor={id}>{label}</label>
      </>
    )
  }

  const rootStyle: any = {}
  const parentStyle: any = {}

  if (experimentMode !== 'simple') {
    rootStyle.height = 'calc(100vh - 200px)'
    rootStyle.overflowY = 'scroll'
  }
  if (experimentMode === 'scroll_parent') {
    parentStyle.overflowY = 'scroll'
  }

  return (
    <div id="experiment_root" style={rootStyle}>
      <h2>Understanding Scrolling and Sticky</h2>
      <form>
        {renderRadio('simple', 'Simple Case')}
        {renderRadio('scroll_outer', 'Setting the outer div scrollable')}
        {renderRadio('scroll_parent', 'Setting the parent div scrollable')}
      </form>
      <ol>
        <li>
          In the simple case, no elements have their height fixed and none has y-overflow set. Then
          &lt;body&gt; is the scrolling element.
        </li>
        <li>
          If an ancester &lt;div&gt; has its height set and y-overflow set to scroll, it becomes the
          scrolling element. The sticky header still works.
        </li>
        <li>
          {' '}
          But, if an element between the scrolling element and the sticky header has its overflow
          set to scroll, the sticky breaks.
        </li>
      </ol>
      <div
        id="preceding_block"
        style={{
          height: 500,
          backgroundColor: '#eee',
        }}
      >
        Some big block
      </div>
      <div id="sticky_parent" style={parentStyle}>
        <div
          id="sticky_header"
          style={{
            position: 'sticky',
            height: 100,
            top: 0,
            backgroundColor: '#ddd',
          }}
        >
          Sticky Header
        </div>
        <div
          id="sticky_content"
          ref={divRef}
          style={{
            height: 1500,
            backgroundColor: '#bbb',
          }}
        >
          Content below sticky
        </div>
      </div>
      <div
        id="succeeding_block"
        style={{
          height: 1500,
          backgroundColor: '#ccc',
        }}
      >
        Some other big block
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
        }}
      >
        Scrolling Element: {scrollingNodeText}
      </div>
    </div>
  )
}

export default Main
