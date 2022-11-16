import { Row, Col, Typography, Card, Avatar } from 'antd'
import { LoginForm } from '../../components';
import { UI } from '../../constants';

const { Meta } = Card;

/**
 * Manage the login component
 * @returns Login page
 */
export const Login = () => {
  return (
    <div className='login-layout'>
      <Row className='login-content'>
        <Col span={10} className='login-left-side'>
          <div>
            <Typography.Title style={{ color: '#fafaff' }}>{UI.LOGIN_TITLE}</Typography.Title>
            <Typography.Paragraph className='text-paragh' >{UI.LOGIN_TITLE_TWO}</Typography.Paragraph>
          </div>
          <Card className='login-left-side-card'>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<span className='text-sec'>{UI.LOGIN_INFO_TEST}</span>}
              description={<span className='text-third'>{UI.LOGIN_INFO_TEST_TWO}</span>}
            />
          </Card>
        </Col>
        <Col span={14} className='login-right-side'>
          <Typography.Title level={2}>{UI.LOGIN}</Typography.Title>
          <LoginForm />
        </Col>
      </Row>
    </div>
  )
}
