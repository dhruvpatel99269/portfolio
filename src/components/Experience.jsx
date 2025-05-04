import { workExperience } from "../constants/index";
import { Timeline } from "./ui/timeline";

const Experience = () => {
    return (
        <section className="c-space my-20">
            <Timeline data={workExperience}/>            
        </section>
    );
};

export default Experience;
