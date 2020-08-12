import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

export default class App extends React.Component<{}, {}> {
  private localData = [
    {
      Id: 1,
      End: new Date(2020, 4, 8, 6, 0),
      Start: new Date(2020, 4, 8, 7, 0),
      Subject: 'John'
    },
    {
      Id: 2,
      End: new Date(2020, 4, 9, 8, 0),
      Start: new Date(2020, 4, 9, 9, 0),
      Subject: 'Steve'
    }
  ];
  private remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });

  public render() {
    return (<div>
      <div className='scheduler-title-container'>Production Procurment Process</div>
      <div className='scheduler-component'>
      <ScheduleComponent height='550px' currentView='Week' selectedDate={new Date(2020, 4, 8)} eventSettings={{ dataSource: this.localData}}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda ]} />
    </ScheduleComponent>
    </div>
    </div>)
  }
}
