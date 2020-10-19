import React from 'react'

interface Props {
  children: JSX.Element
  closeOnBackgroundClick?: boolean
  hideCloseIcon?: boolean
  open: boolean
  setOpen: (open: boolean) => void
}

const Default: React.FC<Props> = (props: Props) => {
  const close = () => {
    props.setOpen(false)
  }
  const backgroundRef = React.useRef<HTMLDivElement>(null)
  const clickOnBackground = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === backgroundRef.current && props.closeOnBackgroundClick) {
      close()
    }
  }
  const renderCloseIcon = () => (
    <div
      onClick={close}
      style={{
        cursor: 'pointer',
        fontSize: 20,
        position: 'absolute',
        right: 10,
        top: 10,
      }}
    >
      ❌
    </div>
  )
  return props.open ? (
    <>
      <div
        style={{
          backgroundColor: '#000',
          bottom: 0,
          left: 0,
          opacity: 0.5,
          position: 'fixed',
          right: 0,
          top: 0,
        }}
      />
      <div
        onClick={clickOnBackground}
        ref={backgroundRef}
        style={{
          alignItems: 'center',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0,
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: '50vh',
            padding: 20,
            position: 'relative',
            width: '50vw',
          }}
        >
          {!props.hideCloseIcon && renderCloseIcon()}
          <div>{props.children}</div>
        </div>
      </div>
    </>
  ) : null
}

export default Default
