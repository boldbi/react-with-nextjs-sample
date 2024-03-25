import React from 'react';
import { BoldBI } from '@boldbi/boldbi-embedded-sdk';

const ServerUrl = process.env.SERVER_URL;
const DashboardId = process.env.DASHBOARD_ID;
const authorizationUrl = '/api';

class Dashboard extends React.Component<{}> {
  BoldBiObj: BoldBI;
  dashboard: any;
  constructor(props: {}) {
    super(props);
    this.BoldBiObj = new BoldBI();
  };

  renderDashboard() {
    this.dashboard = BoldBI.create({
      serverUrl: ServerUrl,
      dashboardId: DashboardId,
      embedContainerId: "dashboard",
      embedType: "component",
      environment: "onpremise",
      mode: BoldBI.Mode.View,
      width: "100%",
      height: window.innerHeight - 20 + 'px',
      expirationTime: 100000,
      authorizationServer: {
        url: authorizationUrl
      }
    });
    this.dashboard.loadDashboard();
  }

  render() {
    return (
      <div id="dashboard"></div>
    );
  }

  async componentDidMount() {
    try {
      this.renderDashboard();
    } catch (error) {
      console.log(error);
    }
  }
}
export default Dashboard;