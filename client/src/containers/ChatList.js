import React, { Component } from 'react';

export default class ChatList extends Component {
    render() {
        return (
            <li>
                <div className="timeline-time">
                    <span className="date">24 February 2014</span>
                    <span className="time">08:17</span>
                </div>
                <div className="timeline-icon">
                    <div className="status bg-info"><h3><b>-</b></h3></div>
                </div>
                <div className="timeline-body">
                    <div className="timeline-header">
                        <span className="username">Richard Leong</span>
                    </div>
                    <div className="timeline-content">
                        <p className="lead">
                            <i className="fa fa-quote-left fa-fw pull-left"></i>
                            Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
                      <i className="fa fa-quote-right fa-fw pull-right"></i>
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}