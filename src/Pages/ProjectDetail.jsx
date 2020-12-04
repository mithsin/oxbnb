import React from 'react';
import { SubjectInfoBlock } from 'Components/Blocks/InfoBlocks';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import { ProjectDetailStyle } from './styles';

const ProjectDetail = () => {
    const classes = ProjectDetailStyle();

    const projectDetailSetting = {
        projectId: '29891298192831fj91jf9ifejjfsokdfj',
        title: 'My New House',
        description: 'like to move and invest in this house',
        imgSrc: 'https://i.pinimg.com/originals/a5/67/88/a56788472a77f38b12204034e4aeccde.jpg',
        state: 'Georgia',
        city: 'Atlanta',
        loanInfo: {
            accumulated: '3,000.00',
            loanRequest: '50,000.00',
        },
        investors: 3,
        dateLeft: 30,
    };

    return (
        <div className={classes.Wrapper}>
            <div className={classes.TitleWrapper}>
                <h2>{projectDetailSetting.title}</h2>
                <p>{projectDetailSetting.description}</p>
            </div>
            <div className={classes.ListWrapper}>
                <div className={classes.ListImgBlock}>
                    <div>
                        <img src={projectDetailSetting.imgSrc} alt='image' style={{width: "100%"}} loading="lazy"/>
                    </div>
                    <div>
                        <span>recommend icon</span>
                        <span>{projectDetailSetting.city}, {projectDetailSetting.state}</span>
                    </div>
                </div>
                <div className={classes.ListInfoBlock}>
                    <SubjectInfoBlock 
                        info={`$${projectDetailSetting.loanInfo.accumulated}`} 
                        title={`Loan request $${projectDetailSetting.loanInfo.loanRequest}`}/>
                    <SubjectInfoBlock info={`${projectDetailSetting.investors}`}  title="Angel Investors"/>
                    <SubjectInfoBlock info={`${projectDetailSetting.dateLeft}`} title="Days to go"/>
                    <div className={classes.ListInfoBlockBtn}>
                        <SubmitButton label="INVEST THIS PROJECT"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail; 