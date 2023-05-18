import SkillCard from "./skillCard/SkillCard";
import skillData from "../../../skillData";
import "./Skill.css";

export default function Skills() {
  // console.log(skillData);
  const skillCard = skillData.map((item) => {
    return <SkillCard key={item.id} skill={item} />;
  });

  return (
    <div className="skills" id="skill">
      <div className="background-filter"></div>
      <div className="skill-title">
        <h1>My Skills</h1>
      </div>
      <div className="skill-container">{skillCard}</div>
    </div>
  );
}
