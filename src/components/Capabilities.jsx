import "./Capabilities.css";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  Ruler,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const strengths = [
  {
    icon: BadgeCheck,
    number: "01",
    title: "Registered Builder",
    description:
      "Professional construction practice grounded in recognised building standards and responsible project delivery.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Registered Engineer",
    description:
      "Technical coordination and engineering input to help projects move from drawings and specifications to practical execution.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Professional Project Management",
    description:
      "Clear coordination of scope, people, materials, schedules, documentation, and project deliverables.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Quality-Focused Construction",
    description:
      "Attention to workmanship, materials, specifications, and the details that influence long-term performance.",
  },
  {
    icon: FileCheck2,
    number: "05",
    title: "Transparent Documentation",
    description:
      "Better project decisions start with clear records, estimates, scope information, and construction documentation.",
  },
  {
    icon: HardHat,
    number: "06",
    title: "Safety-Conscious Execution",
    description:
      "Safety considerations are built into how construction activities are planned, coordinated, and supervised.",
  },
  {
    icon: UsersRound,
    number: "07",
    title: "Experienced Site Supervision",
    description:
      "Active site oversight helps keep construction activities aligned with project requirements and expected standards.",
  },
];

function Capabilities() {
  return (
    <section className="capabilities" id="why-habtech">
      <div className="capabilities-container">
        <div className="capabilities-header">
          <div className="capabilities-heading">
            <span className="capabilities-eyebrow">WHY HABTECH</span>
            <h2>Professional thinking behind every build.</h2>
            <p>
              Construction is more than putting materials together. Habtech
              combines professional expertise, project coordination,
              documentation, quality control, and site supervision to help
              clients build with greater clarity and confidence.
            </p>
          </div>

          <div className="capabilities-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="capabilities-grid">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <article className="capability-card" key={strength.title}>
                <div className="capability-card-top">
                  <span className="capability-number">{strength.number}</span>
                  <div className="capability-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{strength.title}</h3>
                <p>{strength.description}</p>

                <span className="capability-rule" />
              </article>
            );
          })}
        </div>

        <div className="capabilities-footer">
          <div>
            <span className="footer-icon">
              <ShieldCheck size={22} />
            </span>
            <div>
              <strong>BUILT AROUND PROFESSIONAL ACCOUNTABILITY</strong>
              <p>
                Clear processes, responsible execution, and practical
                communication throughout the project lifecycle.
              </p>
            </div>
          </div>

          <div className="capabilities-footer-stats">
            <span>PLAN</span>
            <span>COORDINATE</span>
            <span>SUPERVISE</span>
            <span>DELIVER</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
