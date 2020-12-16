import React, {Component} from 'react';

class OverallSummary extends Component {

    render() {
        return (
            <div>
                <h3>Overall Summary</h3>
                <p>Provide brief summary of the flow of events in the record, including outcomes.</p>
                <textarea id="overallSummary" name="overallSumarry" rows="4" cols="150"></textarea>
                <br/>
                <p>Summarize opportunities for improvement, focusing on system issues such as, updating policy and procedure documents, identification of protocols for transfer, etc.</p>
                <textarea id="improvement" name="improvement" rows="4" cols="150"></textarea>
                <br/>
            </div>            
        )
    }

}

export default OverallSummary;