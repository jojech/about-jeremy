import s4experiences from "../bio/s4/experience";
import Avatar from "../components/avatar";
import Card, { CardSubTitle, CardTitle } from "../components/card";

export default function HomePage() {
  return (
    <main class="main--home">
      <Card className="card--limited centered mb">
        <div className="columns--2 mb">
          <Avatar alt="Jeremy Johnson" />
          <div className="centered column">
            <CardTitle>Jeremy Johnson</CardTitle>
            <div className="meta row row--divided">
              <div>Software Engineer</div>
              <div>Cloud Architect</div>
            </div>
            <div className="meta row row--divided">
              <a href="mailto:jojech@outlook.com"><i className="fa-regular fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/jojech/"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/jojech"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
        <Card className="mb">
          <CardSubTitle>About Me</CardSubTitle>
          <div>
            I help startups and agile teams move the needle for their business by helping them solve solutions securely at scale.
            I am currently the lead developer at the award-winning SaaS product company <a href="https://speak4.co">Speak4</a>.
          </div>
        </Card>
        <Card className="mb">
          <CardSubTitle>Things I'm Proud of</CardSubTitle>
          <ul>
            <li>My wife and son</li>
            <li>Winning multiple awards for best platform and product of the year at Speak4 as one of the first Developers and the current team lead.</li>
            <li>Hosting an international board game tournament on my custom board game tracking site <a href="https://dicebender.com" target="_blank">Dicebender</a></li>
          </ul>
          <img src="/assets/awards.png" alt="Speak4 Awards" className="awards" />
        </Card>
        <Card className="mb">
          <CardSubTitle>Recent Projects</CardSubTitle>
          <ul>
            {s4experiences.slice(0, 4).map((exp, expi) => (
              <li key={expi}>
                {exp.label} - {exp.role}
                <div className="tags">
                  {exp.tech.map((t, ti) => <span className="tag" key={ti}>{t}</span>)}
                </div>
                <div className="meta">
                  {exp.purpose}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </Card>
      <div className="meta mb">Built with Hono and hosted using Cloudflare Workers <i className="fa-solid fa-heart"></i></div>
    </main>
  )
}