import React from 'react';
import WidgetGrid from '../widgets/WidgetGrid'
import BigBreadcrumbs from '../navigation/components/BigBreadcrumbs'

export default class AssetManagement extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div id="content">

        <div className="row">
          <BigBreadcrumbs items={['Requests', 'Asset Management']}
                className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
        </div>

        <WidgetGrid>
          <form role="form" name="mlcRequestAssetManagementForm" noValidate>
          <div className="row">
                <div className="col-md-3">
                    <label className="control-label">APIR Code*</label>
                </div>
                <div className="col-md-4 form-group">
                    <input className="form-control" name="apirCode" type="text" required />
                </div>
          </div>
          <div className="row bottom10">
                  <div className="col-md-3">
                      <label className="control-label">Security Name*</label>
                  </div>
                  <div className="col-md-4 form-group">
                      <input className="form-control" name="securityName" type="text" required />
                  </div>
              </div>
              <div className="row bottom10">
                  <div className="col-md-3">
                      <label className="control-label">Asset Type*</label>
                  </div>
                  <div className="col-md-4 form-group">
                      <p className="input-group">
                          <select className="text-primary padding3" name="assetType" required>
                          </select>
                      </p>
                  </div>
              </div>
              <div className="row bottom10">
                  <div className="col-md-3">
                      <label className="control-label">Asset Status*</label>
                  </div>
                  <div className="col-md-4 form-group">
                      <p className="input-group">
                          <select className="text-primary padding3" name="assetStatus" required></select>
                      </p>
                  </div>
              </div>

          </form>
        </WidgetGrid>

      </div>
    )
  }

}
