import React, { useEffect, useState} from 'react';
import moment from 'moment'
import { SubjectInfoBlock } from 'Components/Blocks/InfoBlocks';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { ProjectDetailStyle } from './styles';

// Mock Data
import { cardStatusList } from 'Pages/mockData';

const UTCDate = moment.utc().format('YYYY-MM-DD HH:mm:ss');

const ProjectDetail = (props) => {
    const classes = ProjectDetailStyle();
    const [projectState, setProjectState] = useState({})
    useEffect(()=>{
        setProjectState(cardStatusList.find(list => list.projectId === props.match.params.projectId))
    },[]);

    const daysLeft = (start, end) => {
        const date1 = moment(end);
        const date2 = moment(start);
        const days = date1.diff(date2, 'days');
        return days;
    };

    return (
        <div className={classes.Wrapper}>
            <div className={classes.TitleWrapper}>
                <h2>{projectState.title}</h2>
                <p>{projectState.description}</p>
            </div>
            <div className={classes.ListWrapper}>
                <div className={classes.ListImgBlock}>
                    <div>
                        <img src={projectState.coverImg} alt='image' style={{width: "100%"}} loading="lazy"/>
                    </div>
                    <div>
                        {projectState.purchaserBackgroundChecked ? <span>Stars</span> : ''}
                        <span>{projectState?.propertyDetails?.location?.city}, {projectState?.propertyDetails?.location?.state}</span>
                    </div>
                </div>
                <div className={classes.ListInfoBlock}>
                    <SubjectInfoBlock 
                        info={`$${projectState.accumulated}`} 
                        title={`Loan request $${projectState.loanRequest}`}/>
                    <SubjectInfoBlock info={`${projectState.investors}`}  title="Angel Investors"/>
                    <SubjectInfoBlock info={daysLeft(projectState?.startDate, projectState?.endDate)} title="Days to go"/>
                    <div className={classes.ListInfoBlockBtn}>
                        <SubmitButton label="INVEST THIS PROJECT"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectDetail.defaultProps = {
        projectId: '',
        title: '',
        description: '',
        coverImg: '',
        propertyDetails: {
            location: {
                city: '',
                state: '',
            },
        },
        loanInfo: {
            accumulated: '',
            loanRequest: '',
        },
        investors: 3,
        dateLeft: 30
}

export default ProjectDetail; 