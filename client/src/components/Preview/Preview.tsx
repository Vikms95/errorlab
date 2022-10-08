import { ReactElement } from 'react'
import { Card, Container, Row, Table } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Preview({ children }: Props) {
  return (
    <Container fluid>
      <Row>
        <div className='col12'>
          <Card>
            <Card.Body>
              <Table className='table-hover'>{children}</Table>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  )
}
