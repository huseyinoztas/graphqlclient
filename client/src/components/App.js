
import { Routes, Route } from 'react-router-dom';
import { Col, Row } from 'antd';
import styles from './styles.module.css';

import HeaderMenu from './HeaderMenu';


// Pages
import Home from './Home';
import NewEvent from './NewEvent';
import Event from './Event';

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={12}>
          <Row>
            <Col span={20}>
              <HeaderMenu />
            </Col>
           
          </Row>

          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<NewEvent />} />
              <Route path="/event/:id" element={<Event />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
