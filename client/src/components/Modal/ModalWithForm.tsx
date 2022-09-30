import { Modal } from './Modal'
import { FormWithProject } from '../Form/FormWithProject'
import { FormWithTicket } from '../Form/FormWithTicket'

export function ModalWithForm() {
  return (
    <Modal>
      <FormWithTicket></FormWithTicket>
    </Modal>
  )
}
