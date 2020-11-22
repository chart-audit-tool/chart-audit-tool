import React, {Component} from 'react';
import ChartReview from '../component/ChartReview';
import PatientInformation from '../component/PatientInformation';
import OverallSummary from '../component/OverallSummary';
import PoliciesAndProcedures from '../component/PoliciesAndProcedures';
import Communication from '../component/Communication';
import Documentation from '../component/Documentation';
import MaternalTransport from '../component/MaternalTransport';
import QualityAssessment from '../component/QualityAssessment';

class ChartAuditForm extends Component {

    handleSumbit(event) {
        event.preventDefault();
        window.print();
    }

    refreshPage() {
        window.location.reload();
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div class="position">
                <form onSubmit={this.handleSumbit}> 
                    <br/>
                    <label>
                        Chart ID:
                        <input type="text" name="chartID" />
                    </label>
                    <br/>
                    <label>
                        Date of Service:
                        <input type="date" name="serviceDate" />
                    </label>
                    <br/>
                    <label>
                        Audit Date:
                        <input type="date" name="auditDate" />
                    </label>
                    <br/>
                    <label>
                        Auditor:
                        <input type="text" name="auditor" />
                    </label>              
                    <br/>
                    <ChartReview/>
                    <PatientInformation/>
                    <OverallSummary/>
                    <PoliciesAndProcedures/>
                    <Communication/>
                    <Documentation/>
                    <MaternalTransport/>
                    <QualityAssessment/>
                    <br/>
                    <input type="submit" id="printPageButton" value="Print" /><br/><br/>
                </form>
                <button id="printPageButton" onClick={this.refreshPage}>Refresh Page</button><br/><br/>
            </div>
        );
    }
}

export default ChartAuditForm;