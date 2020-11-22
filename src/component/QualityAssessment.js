import React, {Component} from 'react';

class QualityAssessment extends Component {

    render() {
        return (
            <div>
                <h3>Quality Assessment/Improvement Process</h3>
                <p>Was this record submitted for review according to the facility's quality improvement process? Please briefly explain.</p>
                <input type="radio" id="yes14" name="quality" value="Yes"></input>
                <label htmlFor="yes14">Yes</label>
                <br/>
                <input type="radio" id="no14" name="quality" value="No"></input>
                <label htmlFor="no14">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
                <p class="pageBreak">If submitted to review by the facility's quality improvement process, was documentation present and adequate? Please explain.</p>
                <input type="radio" id="yes15" name="quality1" value="Yes"></input>
                <label htmlFor="yes15">Yes</label>
                <br/>
                <input type="radio" id="no15" name="quality1" value="No"></input>
                <label htmlFor="no15">No</label>
                <br/>
                <p><i>Comments:</i></p>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br/>
            </div>            
        )
    }

}

export default QualityAssessment;