import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import NotMatch from '@comps/not-match';
import routes from './config/routes';

class App extends Component {
  render() {
    // Suspense用于懒加载
    return <Suspense fallback={<Spin size="large"/>}>
      <Router>
            <Switch>
              {
                routes.map((route, index) => {
                  // return <Route path={route.path} exact={route.exact} component={route.component}/>
                  return <Route {...route} key={index}/>;
                })
              }
              {/* 不写path 就是匹配所有路径 */}
              <Route component={NotMatch}/>
            </Switch>
       
      </Router>
    </Suspense>
  }
}

export default App;