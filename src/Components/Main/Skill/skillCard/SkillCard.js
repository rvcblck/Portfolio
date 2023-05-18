export default function SkillCard(skill) {
  // console.log(skill);
  // const icon = "./images/html.png";
  return (
    <div className="skill-card">
      <div className="skill-info">
        <div className="capsule">
          <div className="upper-capsule">
            <img src={skill.skill.icon} alt="logo" />
          </div>
          <div className="lower-capsule">
            <label>{skill.skill.percent}</label>
          </div>
        </div>
      </div>
      <div className="skill-name">
        <label>{skill.skill.skill}</label>
      </div>
    </div>
  );
}
