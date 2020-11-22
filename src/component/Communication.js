import React, {Component} from 'react';

class Communication extends Component {

    render() {
        return (
            <div>
                <h3>Communication</h3>
                <p>Were there issues of communication or coordination of care?</p>
                <input type="radio" id="yes5" name="communication" value="yes"></input>
                <label htmlFor="yes5">Yes</label>
                <br/>
                <input type="radio" id="no5" name="communication" value="no"></input>
                <label htmlFor="no5">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
            </div>            
        )
    }

}

export default Communication;