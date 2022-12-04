import { Divider, Row } from 'antd'

export const CollectionLists = ({
  theme,
  title = null,
  children }) => {
  return (
    <>
      {title && <Divider orientation='left'>{title}</Divider>}
      <Row gutter={[16, 16]}>
        {children}
      </Row>
    </>
  )
}
