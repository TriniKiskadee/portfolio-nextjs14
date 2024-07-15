import React, {useState} from 'react';
import Background from "@/components/background";
import CurrentSkills from "@/components/current-skills";
import SkillsToLearn from "@/components/skills-to-learn";
import Contacts from "@/components/contacts";

const SkillsSection = () => {
    /*TODO: Redesign to show a little more info, eg. Heading: NextJS, Subheading: Framework*/
    /*TODO: Add 'Skills I Want to Learn' section*/

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'}>
            <div className={'w-full relative col-span-1'}>
                <Background className={'rounded-2xl'}/>
            </div>

            <div className={'flex flex-col w-full col-span-1 lg:col-span-2 gap-4'}>
                {/*Current Skills Section*/}
                <CurrentSkills />

                {/*Skills to Learn Section*/}
                <SkillsToLearn />

                {/*Social/Contact Section*/}
                <div className={'grid grid-cols-1 sm:grid-cols-3 w-full gap-4'}>
                    <Contacts />
                </div>
            </div>
            {/*Skills to learn*/}

        </div>
    );
};

export default SkillsSection;