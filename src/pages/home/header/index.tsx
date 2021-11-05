import history from 'umi'
import styles from './index.less';
import React, { useState } from 'react';
import { Button, Space, Tabs } from 'antd';

const { TabPane } = Tabs

const Header: React.FC = () => {
  const [state, setState] = useState(0)

  const callback = (key: any) => {
    console.log(key)
  }
  const dataList = [
    {
      key: '1',
      title: '首页',
      route: '/'
    },
    {
      key: '2',
      title: '产品功能',
      route: '/'
    },
    {
      key: '3',
      title: '配套硬件',
      route: '/'
    },
    {
      key: '4',
      title: '解决方案',
      route: '/'
    },
    {
      key: '5',
      title: '私有部署',
      route: '/'
    },
    {
      key: '6',
      title: '下载中心',
      route: '/'
    },
    {
      key: '7',
      title: '渠道合作',
      route: '/'
    },
    {
      key: '8',
      title: '文档&帮助',
      route: '/'
    }
  ]

  return (
    <>
      <div >
        <div className={styles.headerCt}>
          <div className={styles.header}>
            <ul className={styles.listCt}>
              <li className={styles.logoCt}>
                <a className={styles.logo} href=""></a></li>
              <Space>
                {dataList.map((item, index) => {
                  return (
                    < li key={item.key} onClick={() => { setState(index); console.log(index) }} className={index === state ? styles.active : styles.list}><a href="#">{item.title}</a> </li>
                  )
                })}
                <li onClick={() => { console.log('商家登录') }}> <Button className={styles.loginBtn}>商家登录</Button> </li>
                <li onClick={() => { console.log('免费试用') }}> <Button className={styles.freeTrial}>免费试用</Button> </li>
              </Space>

            </ul>
          </div>
        </div>

      </div>

    </>

  );
}

export default Header

