import React, { useEffect, useState} from 'react';
import moment from 'moment'
import { SubjectInfoBlock } from 'Components/Blocks/InfoBlocks';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { ProjectDetailStyle } from './styles';
import ImgPreNextCarousel from 'Components/ImageBlock/ImgPreNextCarousel';
import TabMenuScroll from 'Components/TabList/TabMenuScroll';
import SimpleBreadcrumbs from 'Components/SimpleBreadcrumbs';

// Mock Data
import { cardStatusList } from 'Pages/mockData';

const UTCDate = moment.utc().format('YYYY-MM-DD HH:mm:ss');

const ProjectDetail = (props) => {
    const classes = ProjectDetailStyle();
    const [projectState, setProjectState] = useState({})
    const [selectedIndex, setSelectedIndex] = useState(0)
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
            <SimpleBreadcrumbs currentLocation={projectState.title}/>
            <div className={classes.TitleWrapper}>
                <h2>{projectState.title}</h2>
                <p>{projectState.description}</p>
            </div>
            <div className={classes.ListWrapper}>
                <div className={classes.ListImgBlock}>
                    <div className={classes.ListLgImgBlock}>
                        <ImgPreNextCarousel 
                            imgSrc={projectState?.propertyDetails?.images} 
                            selectedIndex={selectedIndex}/>
                    </div>
                    <div className={classes.ListListImgBlock}>
                        {projectState?.propertyDetails?.images.map((imgStr, idx)=>
                            <img src={imgStr} alt={`${idx}-sm-img`} onClick={()=> setSelectedIndex(idx)}/>
                        )}
                    </div>
                </div>
                <div>
                    {projectState.purchaserBackgroundChecked ? <span>Stars</span> : ''}
                    <span>
                        {projectState?.propertyDetails?.location?.city}, {projectState?.propertyDetails?.location?.state}
                    </span>
                    </div>
                <div className={classes.ListInfoBlock}>
                    <div className={classes.ListInfoBlockDetail}>
                        <SubjectInfoBlock 
                            info={`$${projectState.accumulated}`} 
                            title={`Loan request $${projectState.loanRequest}`}/>
                        <SubjectInfoBlock info={`${projectState.investors}`}  title="Angel Investors"/>
                        <SubjectInfoBlock info={daysLeft(projectState?.startDate, projectState?.endDate)} title="Days to go"/>
                    </div>
                    <div className={classes.ListInfoBlockBtn}>
                        <SubmitButton label="INVEST THIS PROJECT"/>
                    </div>
                </div>
            </div>
            <div className={classes.ListInfoDetail}>
                <TabMenuScroll />
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