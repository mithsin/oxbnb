import React from 'react';
import { SubjectInfoBlock } from 'Components/Blocks/InfoBlocks';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { ProjectDetailStyle } from './styles';

const ProjectDetail = () => {
    const classes = ProjectDetailStyle();

    const projectDetailSetting = {
        projectId: '29891298192831fj91jf9ifejjfsokdfj',
        title: 'My New House',
        description: 'like to move and invest in this house'
    };

    return (
        <div className={classes.Wrapper}>
            <div className={classes.TitleWrapper}>
                <h2>Title</h2>
                <p>Short Description</p>
            </div>
            <div className={classes.ListWrapper}>
                <div>
                    <div>Images</div>
                    <div>
                        <span>recommend icon</span>
                        <span>state, city</span>
                    </div>
                </div>
                <div>
                    <SubjectInfoBlock info="$3,000.00" title="Loan request $50,000.00"/>
                    <SubjectInfoBlock info="3" title="Angel Investors"/>
                    <SubjectInfoBlock info="30" title="Days to go"/>
                    <SubmitButton
                        label="INVEST THIS PROJECT"/>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail; 