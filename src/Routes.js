import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TablesNavPage from './pages/TablesNavPage';
// FREE
import DatatablePage from './pages/DatatablePage';
import DatatablePageV5 from './pages/DatatablePage-2';
import DatatableApiPage from './pages/DatatableApiPage';
import TablePage from './pages/TablePage';
import TableResponsivePage from './pages/TableResponsivePage';
import TableScrollPage from './pages/TableScrollPage';
import TableStylesPage from './pages/TableStylesPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Hiển thị menu các table ra */}
        <Route exact path='/' component={TablesNavPage} />
        <Route exact path='/tables' component={TablesNavPage} />

        {/* Hiển thị các component ra */}
        <Route path='/tables/table' component={TablePage} />
        <Route path='/tables/table-responsive' component={TableResponsivePage} />
        <Route path='/tables/table-scroll' component={TableScrollPage} />
        <Route path='/tables/table-styles' component={TableStylesPage} />
        <Route path='/tables/datatable-api' component={DatatableApiPage} />
        <Route path='/tables/datatable' component={DatatablePage} />
        <Route path='/tables/datatable-2' component={DatatablePageV5} />
        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
