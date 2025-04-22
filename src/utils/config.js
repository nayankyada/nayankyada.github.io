import {
  AngelOneIcon,
  MoneyHopIcon,
  SigNozIcon,
} from "pages/projects/assets/icons";
import SavoryIcon from "pages/projects/assets/savory.webp";
import MarlinIcon from "pages/projects/assets/marlin.png";
import { ExternalLink } from "pages/projects/ExternalLink";
import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiUpwork } from "react-icons/si";

export const config = {
  emailAddress: "kayadanayan@gmail.com",
  name: "Nayan Kyada",
  username: "nayankyada",
  aboutIntro: (
    <h2 className="about__intro">
      Hey, I’m Nayan Kyada,
      <br /> A Professional Frontend Developer from the India.
    </h2>
  ),
  skillIntro: (
    <p>
      As a frontend web architect, I specialize in utilizing the{" "}
      <abbr title="Next.js, React, TailwindCSS, and Sanity.io CMS">
        JAMSTACK
      </abbr>{" "}
      stack to create both the server-side logic and visual components that
      users engage with within an application.
    </p>
  ),
  techStackIntro: (
    <p>
      My proficiency extends beyond this to encompass an array of technologies,
      including HTML5, CSS3, JavaScript, React.js, Next.js CMS with TypeScript,
      TailwindCSS, Redux, Sanity.io, GraphQL, Recoil.js, Storybook. With
      extensive experience in this field, I bring a wealth of knowledge to any
      project.
    </p>
  ),
  contactText:
    "I am open to engaging in exciting freelance opportunities and projects. If you are interested in working with me, the most efficient way to reach me is by sending an email to",
  projects: [
    {
      title: (
        <ExternalLink to="https://www.savoryandpartners.com/">
          <h3>
            Savory & Partners: Second Citizenship & Residency by Investment
          </h3>
        </ExternalLink>
      ),
      logo: (
        <img src={SavoryIcon} alt="Savory & Partners" width={30} height={30} />
      ),
      description: (
        <>
          <p>
            Savory & Partners offers programs that allow individuals to obtain
            citizenship in another country through financial investment,
            providing benefits like global mobility and economic opportunities.
          </p>
          <div>
            As a developer with Savory & Partners, I had the following key
            responsibilities:
            <ul>
              <li>
                I played a key role in migrating the existing WordPress website
                to Next.js, TailwindCSS and Sanity.io CMS.
              </li>
              <li>
                Implemented modern web development practices, ensuring a
                responsive and mobile-friendly design across all devices.
              </li>
              <li>
                Leveraged Next.js's server-side rendering capabilities to
                improve initial page load times and overall performance.
              </li>
              <li>
                Utilized Next.js's image optimization features and implemented
                lazy loading to enhance page load speeds.
              </li>
              <li>
                Dramatically improved website performance, increasing overall
                scores from 60% to 85%. Implemented advanced SEO techniques,
                including optimized meta tags, structured data, and improved
                site architecture.
              </li>
            </ul>
          </div>
        </>
      ),
      tags: [
        "React.js",
        "Next.js v14",
        "Typescript",
        "TailwindCSS",
        "Sanity.io",
        "Git",
      ],
      links: [
        <ExternalLink to="https://www.savoryandpartners.com/">
          Savory & Partners
        </ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://marlin.org">
          <h3>Marlin: Scalable coprocessors for decentralized compute</h3>
        </ExternalLink>
      ),
      logo: <img src={MarlinIcon} alt="Marlin" width={30} height={30} />,
      description: (
        <>
          <p>
            Marlin is a verifiable computing protocol featuring TEE and ZK-based
            coprocessors to delegate complex workloads over a decentralized
            cloud.
          </p>
          <div>
            As a developer with Marlin, I had the following key
            responsibilities:
            <ul>
              <li>
                Contributed to open-source Web3 projects, utilizing Svelte Kit
                and JavaScript to develop cutting-edge solutions.
              </li>
              <li>
                Led the development of the Oyster platform, enabling
                decentralized and secure cloud computing. Designed and
                implemented a serverless Web3 architecture to support scalable
                and efficient decentralized applications.
              </li>
              <li>
                Integrated AWS infrastructure to create a robust framework for
                decentralized cloud services, aligning with Web3 principles of
                security and decentralization.
              </li>
              <li>
                Successfully delivered a decentralized solution that enhanced
                data security and scalability in cloud computing.
              </li>
              <li>
                Collaborated with a global team of contributors, fostering
                innovation in Web3 technologies. Streamlined the integration of
                AWS services within a decentralized framework, improving
                performance and reliability.
              </li>
            </ul>
          </div>
        </>
      ),
      tags: [
        "Svelte Kit",
        "JavaScript",
        "AWS",
        "Web3",
        "Decentralized Computing",
        "Open-Source",
        "Typescript",
        "Ant Design",
        "Styled-components",
        "Redux",
        "Jest",
        "Postman",
        "Unit Testing",
        "API Integration",
      ],
      links: [<ExternalLink to="https://www.marlin.org">Marlin</ExternalLink>],
    },
    {
      title: (
        <ExternalLink to="https://www.angelone.in">
          <h3>Angel One: Online Trading & Stock Broking</h3>
        </ExternalLink>
      ),
      logo: <AngelOneIcon />,
      description: (
        <>
          <p>
            AngelOne Trading Platform is a web-based investment platform that
            allows users to trade in equities, derivatives, and mutual funds.
            With its user-friendly interface and comprehensive research tools,
            AngelOne aims to provide a seamless and efficient trading experience
            for investors of all levels.
          </p>

          <div>
            As a developer with AngelOne, I had the following key
            responsibilities:
            <ul>
              <li>
                Created an eSign KYC module for sub-brokers to facilitate
                trading with AngelOne. Implemented custom validation of buttons
                at every step of KYC to prevent unwanted actions by end users.
              </li>
              <li>
                Configured Unit testing and E2E testing libraries like Jest and
                Cypress.io from scratch. Wrote over 534 test cases for
                components, pages, and E2E services to achieve the desired code
                coverage.
              </li>
              <li>
                Continuously improved code and structure for better bug-free
                features, resulting in an 90% code coverage.
              </li>
            </ul>
          </div>
        </>
      ),
      tags: [
        "Vue.js",
        "VueX",
        "Typescript",
        "SCSS",
        "Cypress.io",
        "Vuetify",
        "Vitest",
        "Postman",
      ],
      links: [
        <ExternalLink to="https://trade.angelone.in">
          AngelOne KYC
        </ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://www.moneyhop.co">
          <h3>moneyHOP: India's First Cross-Border Neo Bank</h3>
        </ExternalLink>
      ),
      logo: <MoneyHopIcon />,
      description: (
        <>
          <p>
            moneyHOP is We are a full-stack banking solution that lets users
            Save, Invest, Borrow, and Spend. It has introduced the concept of
            ‘One Global Account - One Global Card’ - which allows users to do
            ‘everything banking’ from anywhere.
          </p>

          <div>
            As a software engineer at moneyHOP, I had the following
            responsibilities and accomplishments:
            <ul>
              <li>
                As a founding tech member, I oversaw the end-to-end product
                development of the frontend for cross-border Neo Bank Solutions,
                Remittance, and SaaS modules.
              </li>
              <li>
                I designed and built the Remittance frontend system from scratch
                and shaped the product continuously with the Founder and Product
                Managers to achieve the product-market fit. Additionally, I
                participated in the hiring process to bolster the tech team,
                mentored junior team members, and assisted them in debugging
                customer and vendor onboarding queries and reporting bugs.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as Progressive
            Web Apps, AWS services like DynamoDB, AWS Amplify, and s3 Bucket.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Next.js",
        "Typescript",
        "Material-Ui",
        "Recoil.js",
        "Storybook",
        "Tailwind CSS",
        "AWS for Deployments",
        "API Integration",
      ],
      links: [
        <ExternalLink to="https://hopremit.moneyhop.co">
          hopRemit - for Customers
        </ExternalLink>,
        <ExternalLink to="https://k2.moneyhop.co">
          k2Remit - Vendors
        </ExternalLink>,
      ],
    },
  ],
  footerLinks: [
    {
      label: "linkedin.com",
      href: "https://www.linkedin.com/in/nayankyada/",
      icon: <FaLinkedinIn />,
    },
    {
      label: "github.com",
      href: "https://github.com/nayankyada",
      icon: <ImGithub />,
    },
    {
      label: "upwork.com",
      href: "https://www.upwork.com/freelancers/kyadanayan",
      icon: <SiUpwork />,
    },
  ],
};
