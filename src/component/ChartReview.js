import React, {Component} from 'react';

class ChartReview extends Component {

    render() {
        return (
            <div>
                <h3>Indication(s) for Chart Review (check all that apply)</h3>         
                <input type="checkbox" id="maternalDeath" value="Maternal death"></input>
                <label htmlFor="maternalDeath">Maternal death</label>
                <br/>    
                <input type="checkbox" id="transfusion" value="Transfusion of greater than or equal to 4 units"></input>
                <label htmlFor="transfusion">Transfusion of greater than or equal to 4 units</label>
                <br/>
                <input type="checkbox" id="icuAdmission" value="ICU admission"></input>
                <label htmlFor="icuAdmission">ICU admission</label>
                <br/>
                <input type="checkbox" id="sentinelEvent" value="Identified as a sentinel event"></input>
                <label htmlFor="sentinelEvent">Identified as a sentinal event</label>
                <br/>
                <input type="checkbox" id="maternalTransfers" value="Maternal transfers"></input>
                <label htmlFor="HawaimaternalTransfersian">Maternal transfers</label>
                <br/>
                <input type="checkbox" id="preeclampsia" value="Preeclampsia with severe features"></input>
                <label htmlFor="preeclampsia">Preeclampsia with severe features</label>
                <br/>
                <input type="checkbox" id="hellp" value="HELLP"></input>
                <label htmlFor="hellp">HELLP</label>
                <br/>
                <input type="checkbox" id="eclampsia" value="Eclampsia"></input>
                <label htmlFor="eclampsia">Eclampsia</label>
                <br/>
                <input type="checkbox" id="hysterectomy" value="Peripartum hysterectomy"></input>
                <label htmlFor="hysterectomy">Peripartum hysterectomy</label>
                <br/>
                <input type="checkbox" id="vte" value="VTE"></input>
                <label htmlFor="vte">VTE</label>
                <br/>
                <input type="checkbox" id="uterineRupture" value="Uterine Rupture"></input>
                <label htmlFor="uterineRupture">Uterine Rupture</label>
                <br/>
                <input type="checkbox" id="renalFailure" value="Acute renal failure"></input>
                <label htmlFor="renalFailure">Acute renal failure</label>
                <br/>
                <input type="checkbox" id="respiratorySyndrome" value="Acute respiratory distress syndrome"></input>
                <label htmlFor="respiratorySyndrome">Acute respiratory distress syndrome</label>
                <br/>
                <input type="checkbox" id="intravascularCoagulation" value="Disseminated intravascular coagulation (DIC)"></input>
                <label htmlFor="intravascularCoagulation">Disseminated intravascular coagulation (DIC)</label>
                <br/>
                <input type="checkbox" id="mechanicalVentilation" value="Mechanical ventilation"></input>
                <label htmlFor="mechanicalVentilation">Mechanical ventilation</label>
                <br/>
                <input type="checkbox" id="myocardialInfarction" value="Acute myocardial infarction"></input>
                <label htmlFor="myocardialInfarction">Acute myocardial infarction</label>
                <br/>
                <input type="checkbox" id="cardiacArrest" value="Cardiac arrest"></input>
                <label htmlFor="cardiacArrest">Cardiac arrest</label>
                <br/>
                <input type="checkbox" id="cardiomyopathy" value="Cardiomyopathy"></input>
                <label htmlFor="cardiomyopathy">Cardiomyopathy</label>
                <br/>
                <input type="checkbox" id="fibrillation" value="Ventricular fibrillation"></input>
                <label htmlFor="fibrillation">Ventricular fibrillation</label>
                <br/>
                <input type="checkbox" id="cardioversion" value="Cardioversion"></input>
                <label htmlFor="cardioversion">Cardioversion</label>
                <br/>
                <input type="checkbox" id="heartFailure" value="Acute heart failure"></input>
                <label htmlFor="heartFailure">Acute heart failure</label>
                <br/>                
            </div>            
        )
    }

}

export default ChartReview;