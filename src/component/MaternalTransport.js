import React, {Component} from 'react';

class MaternalTransport extends Component {

    render() {
        return (
            <div>
                <h3>Maternal Transport (as applicable)</h3>
                <p>Was the patient transferred INTO the facility or TO another facility?</p>
                <input type="radio" id="in" name="transport" value="In"></input>
                <label htmlFor="in">In</label>
                <br/>
                <input type="radio" id="out" name="transport" value="Out"></input>
                <label htmlFor="out">Out</label>
                <br/>
                <input type="radio" id="n/a" name="transport" value="N/A"></input>
                <label htmlFor="n/a">N/A</label>
                <br/>
                <p>If the adverse event occurred BEFORE transfer, was the transfer accomplished in an appropriate time frame? Please explain.</p>
                <input type="radio" id="yes11" name="transport1" value="Yes"></input>
                <label htmlFor="yes11">Yes</label>
                <br/>
                <input type="radio" id="no11" name="transport1" value="No"></input>
                <label htmlFor="no11">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="150"></textarea>
                <br/>
                <p class="pageBreak">Was the patient appropriately stabilized prior to transfer?</p>
                <input type="radio" id="yes12" name="transport2" value="Yes"></input>
                <label htmlFor="yes12">Yes</label>
                <br/>
                <input type="radio" id="no12" name="transport2" value="No"></input>
                <label htmlFor="no12">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="150"></textarea>
                <br/>
                <p>Was communication with the referring or accepting facility, as applicable, appropriately documented in the record?</p>
                <input type="radio" id="yes13" name="transport3" value="Yes"></input>
                <label htmlFor="yes13">Yes</label>
                <br/>
                <input type="radio" id="no13" name="transport3" value="No"></input>
                <label htmlFor="no13">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="150"></textarea>
                <br/>
            </div>            
        )
    }

}

export default MaternalTransport;