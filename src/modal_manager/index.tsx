import React from 'react'
import { Modal } from './Modal'
import useModal from './useModal'

interface Props {}

export const ModalManager: React.FC<Props> = (props: Props) => {
  const [modal1, setModal1] = useModal()
  const [modal2, setModal2] = useModal()
  const toggleModal1 = () => {
    setModal1(!modal1)
  }
  const toggleModal2 = () => {
    setModal2(!modal2)
  }
  return (
    <div>
      <h2> Modal Manager</h2>
      <p>
        A Custom Hook is used instead of Redux to globally-coordinate Modals - i.e. to ensure no
        more than one modal can be open at a time. Each Modal is governed by a boolean state
        variable created from the Custom Hook, which stores globally a closer function for any open
        modal, and calls it before opening a new one.
      </p>
      <div>
        <h3>Modal 1</h3>
        <button onClick={toggleModal1}>Toggle</button>
        <Modal open={modal1} setOpen={setModal1} closeOnBackgroundClick>
          <div>
            <h4>Modal 1</h4>
            <button onClick={toggleModal2}>Open Modal 2</button>
          </div>
        </Modal>
      </div>
      <div>
        <h3>Modal 2</h3>
        <button onClick={toggleModal2}>Toggle</button>
        <Modal open={modal2} setOpen={setModal2} hideCloseIcon>
          <div>
            <h4>Modal 2</h4>
            <button onClick={toggleModal1}>Open Modal 1</button>&nbsp;
            <button onClick={toggleModal2}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}
