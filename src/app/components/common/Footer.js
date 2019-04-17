/**
 * Created by griga on 11/24/15.
 */

import React from 'react'

import {Dropdown, MenuItem} from 'react-bootstrap'

export default class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <span className="txt-color-white">SmartAdmin WebApp © 2013-2015</span>
                    </div>
                </div>
            </div>
        )
    }
}
