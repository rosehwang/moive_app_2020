import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//App 컴포넌트 임포트

ReactDOM.render(
 
    <App />//App 컴포넌트 임포트
           //여러 컴포넌트를 입력한다면 '인접한 JSX요소는 반드시 하나의 태그로 감싸야 합니다' 메시지가 출력됨.
  ,
  document.getElementById('root')
  //ID가 root인 App컴포넌트를 그린다고 생각하면됨.
);