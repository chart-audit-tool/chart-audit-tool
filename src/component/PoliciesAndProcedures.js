import React, {Component} from 'react';

class PoliciesAndProcedures extends Component {

    render() {
        return (
            <div>
                <h3>Policies and Procedures/Protocols and Use of Other Services</h3>
                <p>Related to the condition(s) for which the record was identified or the outcome(s), did the facility have a current policy, procedure, or protocol in place to address the condition(s) and/or outcome(s)?</p>
                <input type="radio" id="yes1" name="policies" value="yes"></input>
                <label htmlFor="yes1">Yes</label>
                <br/>
                <input type="radio" id="no1" name="policies" value="no"></input>
                <label htmlFor="no1">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p>Is the Policy/Procedure/Protocol appropriate for the patient situation and based on current evidence and practice?</p>
                <input type="radio" id="yes2" name="policies2" value="yes"></input>
                <label htmlFor="yes2">Yes</label>
                <br/>
                <input type="radio" id="no2" name="policies2" value="no"></input>
                <label htmlFor="no2">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p>If a policy, procedure, or protocol was in place, was the policy, procedure, or protocol followed?</p>
                <input type="radio" id="yes3" name="policies3" value="yes"></input>
                <label htmlFor="yes3">Yes</label>
                <br/>
                <input type="radio" id="no3" name="policies3" value="no"></input>
                <label htmlFor="no3">No</label>
                <br/>
                <p>If the policy, procedure, or protocol was not followed, please explain the rationale for not following the policy, procedure, or protocol, if able to be determined.</p>
                <textarea id="overallSummary" name="policies4" rows="4" cols="50"></textarea>
                <br/>
                <p>Were appropriate/indicated support services, such as imaging, laboratory testing, blood bank, and anesthesia/analgesia services, available?</p>
                <input type="radio" id="yes4" name="policies5" value="yes"></input>
                <label htmlFor="yes4">Yes</label>
                <br/>
                <input type="radio" id="no4" name="policies5" value="no"></input>
                <label htmlFor="no4">No</label>
                <br/>
            </div>            
        )
    }

}

export default PoliciesAndProcedures;