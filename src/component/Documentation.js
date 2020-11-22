import React, {Component} from 'react';

class Documentation extends Component {

    render() {
        return (
            <div>
                <h3 class="pageBreak">Documentation</h3>
                <p>Is documentation of the appropriate level of obstetric provider present in the record?</p>
                <input type="radio" id="yes6" name="documentation" value="yes"></input>
                <label htmlFor="yes6">Yes</label>
                <br/>
                <input type="radio" id="no6" name="documentation" value="no"></input>
                <label htmlFor="no6">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p>Is documentation of nursing care present in the record?</p>
                <input type="radio" id="yes7" name="documentation1" value="yes"></input>
                <label htmlFor="yes7">Yes</label>
                <br/>
                <input type="radio" id="no7" name="documentation1" value="no"></input>
                <label htmlFor="no7">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p>If a physician or certified nurse midwife is called in via an urgent request, is there documentation that the patient was evaluated within 30 minutes?</p>
                <input type="radio" id="yes8" name="documentation2" value="yes"></input>
                <label htmlFor="yes8">Yes</label>
                <br/>
                <input type="radio" id="no8" name="documentation2" value="no"></input>
                <label htmlFor="no8">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p>As applicable, is adequate informed consent, including discussing of risks, benefits, and alternatives, documented?</p>
                <input type="radio" id="yes9" name="documentation3" value="yes"></input>
                <label htmlFor="yes9">Yes</label>
                <br/>
                <input type="radio" id="no9" name="documentation3" value="no"></input>
                <label htmlFor="no9">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p class="pageBreak">Is the procedure/management/intervention appropriately documented (timely and appropriate information)?</p>
                <input type="radio" id="yes10" name="documentation4" value="yes"></input>
                <label htmlFor="yes10">Yes</label>
                <br/>
                <input type="radio" id="no10" name="documentation4" value="no"></input>
                <label htmlFor="no10">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
            </div>            
        )
    }

}

export default Documentation;