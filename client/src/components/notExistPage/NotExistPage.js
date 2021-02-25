import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

export default function NotExistPage() {
  return (
    <div>
      <div className="not-exist-page-details">
        <div className="not-exist-page-details-body">
          <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
        </div>
      </div>
    </div>
  );
}
