import React from 'react';
import styles from './index.less';
import { request } from 'umi'

export default () => {

  const requestTest = () => {
    request('/api/test').then(resp => console.log(resp))
  }
  
  return (
    <div>
      <button onClick={requestTest}>trigger request</button>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
