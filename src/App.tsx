import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

export default class App extends React.Component {
  private localData = [
    {
      Id: 1,
      End: new Date(2019, 4, 7, 6, 0),
      Start: new Date(2019, 4, 7, 6, 30),
      Subject: 'John'
    },
    {
      Id: 2,
      End: new Date(2019, 4, 7, 7, 30),
      Start: new Date(2019, 4, 7, 8, 0),
      Subject: 'Steve'
    }
  ];
  /*private remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });*/
  
  private eventTemplate(props: {[key: string]: Object}): JSX.Element {
    return (<div className="month-template-wrap">{props.Subject}</div>);
  }
  public render() {
    return (
      <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2020, 4, 7)} eventSettings={{ dataSource: this.localData }}>
      <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                <ViewDirective option='TimelineWeek'/>
                <ViewDirective option='Month' eventTemplate={this.eventTemplate.bind(this)}/>
            </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda ]} />
    </ScheduleComponent>
    )
  }
}
