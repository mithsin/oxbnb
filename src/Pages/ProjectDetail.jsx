import React from 'react';
import { SubmitButton } from 'Components/MUI/ButtonTypes';

const ProjectDetail = () => {

    const InfoBlock = ({info, title}) => (
        <div>
            <span>{info}</span>
            <span>{title}</span>
        </div>
    );
    return (
        <div>
            <div>
                <h2>Title</h2>
                <p>Short Description</p>
            </div>
            <div>
                <div>
                    <div>Images</div>
                    <div>
                        <span>recommend icon</span>
                        <span>state, city</span>
                    </div>
                </div>
                <div>
                    <InfoBlock info="$3,000.00" title="Loan request $50,000.00"/>
                    <InfoBlock info="3" title="Angel Investors"/>
                    <InfoBlock info="30" title="Days to go"/>
                    <SubmitButton
                        label="INVEST THIS PROJECT"/>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail; 