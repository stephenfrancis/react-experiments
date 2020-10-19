import React from 'react'
import Modal from './Modal'
import useModal from './useModal'

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
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
      <h1>Test Modals</h1>
      <div>
        <h2>Modal 1</h2>
        <button onClick={toggleModal1}>Toggle</button>
        <Modal open={modal1} setOpen={setModal1}>
          <div>
            <h3>Modal 1</h3>
            <button onClick={toggleModal2}>Open Modal 2</button>
          </div>
        </Modal>
      </div>
      <div>
        <h2>Modal 2</h2>
        <button onClick={toggleModal2}>Toggle</button>
        <Modal open={modal2} setOpen={setModal2}>
          <div>
            <h3>Modal 2</h3>
            <button onClick={toggleModal1}>Open Modal 1</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Main
