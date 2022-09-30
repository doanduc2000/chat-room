import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { auth, provider } from '../firebase/config';
import { signInWithPopup } from 'firebase/auth';
import { addDocument } from '../firebase/service';
const { Title } = Typography;

const Login = () => {
  const handleFbLogin = async () => {
    const { _tokenResponse, user } = await signInWithPopup(auth, provider);
    if (_tokenResponse?.isNewUser) {
      await addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: _tokenResponse.providerId,
      });
    }
  };

  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: '100%', marginBottom: 5 }}>Đăng nhập bằng google</Button>
          <Button onClick={handleFbLogin} style={{ width: '100%', marginBottom: 5 }}>
            Đăng nhập bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
