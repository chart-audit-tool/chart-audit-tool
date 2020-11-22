import React, {Component} from 'react';

class PatientInformation extends Component {

    render() {
        return (
            <div>
                <h3>Patient Information</h3>
                <p>Age:</p>                
                <input type="radio" id="ageRangeOne" name="age" value="15-19"></input>
                <label htmlFor="ageRangeOne">15-19</label>
                <br/>
                <input type="radio" id="ageRangeTwo" name="age" value="20-29"></input>
                <label htmlFor="ageRangeTwo">20-29</label>
                <br/>
                <input type="radio" id="ageRangeThree" name="age" value="30-39"></input>
                <label htmlFor="ageRangeThree">30-39</label>
                <br/>
                <input type="radio" id="ageRangeFour" name="age" value="40-49"></input>
                <label htmlFor="ageRangeFour">40-49</label>
                <br/>
                <input type="radio" id="ageRangeFive" name="age" value="50-59"></input>
                <label htmlFor="ageRangeFive">50-59</label>
                <br/>                
                <p>Race/ethnicity (check all that apply):</p>
                <input type="checkbox" id="American" value="American Indian or Alaska Native"></input>
                <label htmlFor="American">American Indian or Alaska Native</label>
                <br/>    
                <input type="checkbox" id="Asian" value="Asian"></input>
                <label htmlFor="Asian">Asian</label>
                <br/>
                <input type="checkbox" id="AfricanAmerican" value="Black or African American"></input>
                <label htmlFor="AfricanAmerican">Black or African American</label>
                <br/>
                <input type="checkbox" id="Hispanic" value="Hispanic or Latino"></input>
                <label htmlFor="Hispanic">Hispanic or Latino</label>
                <br/>
                <input type="checkbox" id="Hawaiian" value="Native Hawaiian or Other Pacific Islander"></input>
                <label htmlFor="Hawaiian">Native Hawaiian or Other Pacific Islander</label>
                <br/>
                <input type="checkbox" id="White" value="White"></input>
                <label htmlFor="White">White</label>
                <br/>
                <p class="pageBreak">BMI:</p>
                <input type="radio" id="<18.5" name="bmi" value="<18.5"></input>
                <label htmlFor="<18.5">&lt;18.5</label>
                <br/>
                <input type="radio" id="18.5-24.9" name="bmi" value="18.5-24.9"></input>
                <label htmlFor="18.5-24.9">18.5-24.9</label>
                <br/>
                <input type="radio" id="25-29.9" name="bmi" value="25-29.9"></input>
                <label htmlFor="25-29.9">25-29.9</label>
                <br/>
                <input type="radio" id="30-34.9" name="bmi" value="30-34.9"></input>
                <label htmlFor="30-34.9">30-34.9</label>
                <br/>
                <input type="radio" id="35-39.9" name="bmi" value="35-39.9"></input>
                <label htmlFor="35-39.9">35-39.9</label>
                <br/>
                <input type="radio" id=">40" name="bmi" value=">40"></input>
                <label htmlFor=">40">&gt;40</label>
                <br/>
                <p>Route of Delivery:</p>
                <input type="radio" id="primaryCesarean" name="deliveryRoute" value="Primary Cesarean"></input>
                <label htmlFor="primaryCesarean">Primary Cesarean</label>
                <br/>
                <input type="radio" id="repeatCesarean" name="deliveryRoute" value="Repeat Cesarean"></input>
                <label htmlFor="repeatCesarean">Repeat Cesarean</label>
                <br/>
                <input type="radio" id="spontaneousVaginal" name="deliveryRoute" value="Spontaneous vaginal"></input>
                <label htmlFor="spontaneousVaginal">Spontaneous vaginal</label>
                <br/>
                <input type="radio" id="operativeVaginal" name="deliveryRoute" value="Operative vaginal"></input>
                <label htmlFor="operativeVaginal">Operative vaginal</label>
                <br/>
                <input type="radio" id="twinsBothVaginal" name="deliveryRoute" value="Twins - both delivered vaginally"></input>
                <label htmlFor="twinsBothVaginal">Twins - both delivered vaginally</label>
                <br/>
                <input type="radio" id="twinsBothCesarean" name="deliveryRoute" value="Twins - both delivered by Cesarean"></input>
                <label htmlFor="twinsBothCesarean">Twins - both delivered by Cesarean</label>
                <br/>
                <input type="radio" id="twinsOneVaginalOneCesarean" name="deliveryRoute" value="Twins - one delivered vaginally and one delivered by Cesarean"></input>
                <label htmlFor="twinsOneVaginalOneCesarean">Twins - one delivered vaginally and one delivered by Cesarean</label>
                <br/>
                <input type="radio" id="higherOrderVaginally" name="deliveryRoute" value="Higher order multiple gestation - all delivered vaginally"></input>
                <label htmlFor="higherOrderVaginally">Higher order multiple gestation - all delivered vaginally</label>
                <br/>
                <input type="radio" id="higherOrderCesarean" name="deliveryRoute" value="Higher order multiple gestation - all Cesarean delivery"></input>
                <label htmlFor="higherOrderCesarean">Higher order multiple gestation - all delivered vaginally</label>
                <br/>
                <input type="radio" id="higherOrderMix" name="deliveryRoute" value="Higher order multiple gestation - mix of vaginal and Cesarean"></input>
                <label htmlFor="higherOrderMix">Higher order multiple gestation - mix of vaginal and Cesarean</label>
                <br/>
                <input type="radio" id="undelivered" name="deliveryRoute" value="Undelivered"></input>
                <label htmlFor="undelivered">Undelivered</label>
                <br/>
                <p>TOLAC?</p>
                <input type="radio" id="yes" name="tolac" value="Yes"></input>
                <label htmlFor="yes">Yes</label>
                <br/>
                <input type="radio" id="no" name="tolac" value="No"></input>
                <label htmlFor="no">No</label>
                <br/>
            </div>            
        )
    }

}

export default PatientInformation;