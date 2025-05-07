import SavoryIcon from "pages/projects/assets/savory.webp";
import MarlinIcon from "pages/projects/assets/marlin.png";
import DittoJobsIcon from "pages/projects/assets/ditto.png";
import GupshupIcon from "pages/projects/assets/gupshup.png";
import PromptpalIcon from "pages/projects/assets/promptpal.avif";
import PublicisSapientIcon from "pages/projects/assets/ps.jpg";
import SolutelabsIcon from "pages/projects/assets/solutelabs.png";
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
                <strong>Led Migration to Modern Tech Stack:</strong> Migrated
                the existing WordPress site to Next.js, TailwindCSS, and
                Sanity.io, adopting modern web development practices.
              </li>
              <li>
                <strong>Enhanced Performance with SSR & Optimization:</strong>{" "}
                Leveraged Next.js server-side rendering and image optimization
                features, including lazy loading, to significantly boost
                performance and load speeds.
              </li>
              <li>
                <strong>Improved Responsive Design:</strong> Ensured a fully
                responsive, mobile-friendly design across all devices for a
                seamless user experience.
              </li>
              <li>
                <strong>Boosted SEO & Site Performance:</strong> Increased
                performance scores from 60% to 85% by implementing advanced SEO
                strategies like optimized meta tags, structured data, and
                refined site architecture.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as Sanity.io
            CMS, TailwindCSS, Next.js, Web performance and SEO optimization.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Next.js v14",
        "Typescript",
        "TailwindCSS",
        "Sanity.io",
        "Web Performance",
        "Image Optimization",
        "Server-Side Rendering",
        "Responsive Design",
        "Performance Optimization",
        "SEO Optimization",
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
                <strong>
                  Led Development of Decentralized Cloud Platform:
                </strong>{" "}
                Spearheaded the creation of the Oyster platform, implementing a
                serverless Web3 architecture for secure and scalable
                decentralized applications.
              </li>
              <li>
                <strong>Integrated AWS with Web3 Infrastructure:</strong>{" "}
                Designed and integrated AWS services into a decentralized
                framework, enhancing performance, reliability, and alignment
                with Web3 security principles.
              </li>
              <li>
                <strong>
                  Contributed to Open-Source & Global Collaboration:
                </strong>{" "}
                Actively contributed to open-source Web3 projects using
                SvelteKit and JavaScript, collaborating with an international
                team to drive innovation in decentralized technologies.
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
        <ExternalLink to="https://newsletter.promptpal.net/">
          <h3>Promptpal: Discover the best AI prompts</h3>
        </ExternalLink>
      ),
      logo: <img src={PromptpalIcon} alt="Promptpal" width={30} height={30} />,
      description: (
        <>
          <p>
            PromptPal is an AI-powered tool that provides marketers, writers,
            designers, and other professionals with prompts to help them get the
            most out of their work. It allows users to search for prompts based
            on categories such as content writing, education, development, and
            marketing.
          </p>
          <div>
            As a developer with Promptpal, I had the following key
            responsibilities:
            <ul>
              <li>
                <strong>Enhanced User Experience:</strong> Played a key role in
                improving the platform's UX by contributing to the design and
                refinement of intuitive, responsive user interfaces.
              </li>
              <li>
                <strong>Developed Advanced Search Component:</strong>{" "}
                Implemented a versatile multi-purpose search feature, enabling
                efficient navigation and retrieval of prompts across various AI
                platforms using algolia.
              </li>
              <li>
                <strong>Implemented Scalable Component Architecture:</strong>{" "}
                Followed the Atomic Design methodology to build a robust and
                reusable component structure, supporting systematic and scalable
                frontend development.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as Algolia,
            Atomic Design, and Next.js.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Next.js v14",
        "Typescript",
        "Material-UI",
        "Styled-components",
        "Sanity.io",
        "Git",
        "Jest",
      ],
      links: [
        <ExternalLink to="https://www.promptpal.net/platforms/chatgpt">
          Promptpal Dashboard
        </ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://www.ditto.jobs/">
          <h3>Ditto Jobs: Get HIRED with Ditto Jobs.</h3>
        </ExternalLink>
      ),
      logo: <img src={DittoJobsIcon} alt="Ditto Jobs" width={30} height={30} />,
      description: (
        <>
          <p>
            Welcome to Ditto Jobs. Discover thousands of new opportunities
            daily! Sign up and kickstart your job search today.
          </p>

          <div>
            As a developer with Ditto Jobs, I had the following key
            responsibilities:
            <ul>
              <li>
                <strong>Led Frontend Development & Design:</strong> Spearheaded
                the architecture and development of the Ditto.jobs platform
                using HTML, CSS, JavaScript, TypeScript, Redux, Styled
                Components, and Ant Design, ensuring a seamless and scalable
                frontend.
              </li>
              <li>
                <strong>Delivered Key Features & User Experience:</strong>{" "}
                Designed and implemented critical functionalities like user
                profiles, CV tools, and remote job search, while collaborating
                with cross-functional teams to deliver an intuitive and engaging
                user experience.
              </li>
              <li>
                <strong>Maintained Code Quality & Performance:</strong>{" "}
                Conducted code reviews, resolved technical issues, and optimized
                performance through regular enhancements, ensuring a reliable
                and high-performing platform.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as Redux,
            Styled-components, Ant Design, and Cypress.io.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Typescript",
        "Redux",
        "Styled-components",
        "Ant Design",
        "Cypress.io",
        "Postman",
        "Unit Testing",
      ],
      links: [
        <ExternalLink to="https://www.ditto.jobs/">Ditto Jobs</ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://www.gupshup.io">
          <h3>Gupshup: AI-powered messaging platform</h3>
        </ExternalLink>
      ),
      logo: <img src={GupshupIcon} alt="Gupshup" width={30} height={30} />,
      description: (
        <>
          <p>
            Gupshup is an AI-powered messaging platform that allows businesses
            to connect with customers through various channels like WhatsApp,
            SMS, and more.
          </p>

          <div>
            As a software engineer at Gupshup, I had the following
            responsibilities and accomplishments:
            <ul>
              <li>
                <strong>Developed Key Superlemon Products:</strong>{" "}
                Contributed to the Superlemon web app, Chrome extension, and
                Marketing Dashboard in collaboration with Gupshup.io.
              </li>
              <li>
                <strong>Built Custom UI for Merchant Tools:</strong>{" "}
                Engineered user-friendly interfaces for merchants to manage
                chat support, message templates, and customer engagement
                through the Superlemon web app.
              </li>
              <li>
                <strong>
                  Designed Chrome Extension for Customer Management:
                </strong>{" "}
                Created a Chrome extension enabling merchants to manage
                customers and communicate via WhatsApp Web for improved
                efficiency.
              </li>
              <li>
                <strong>Architected Marketing Dashboard:</strong> Developed a
                dashboard that allows merchants to import customer data and
                launch targeted product campaigns to boost sales.
              </li>
              <li>
                <strong>Utilized Modern Frontend Stack:</strong> Applied
                technologies such as HTML, CSS, JavaScript, ReactJS,
                TypeScript, MUI, and PolarisUI to ensure a seamless and
                scalable user experience.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as MUI,
            PolarisUI, Chrome Extension, and Automation and Marketing Dashboard.
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
        "Chrome Extension",
        "Marketing Dashboard",
        "Superlemon",
      ],
      links: [<ExternalLink to="https://www.gupshup.io">Gupshup</ExternalLink>],
    },
    {
      title: (
        <ExternalLink to="https://www.publicissapient.com/">
          <h3>Publicis Sapient: Unlock a world of digital possibilities</h3>
        </ExternalLink>
      ),
      logo: (
        <img
          src={PublicisSapientIcon}
          alt="Publicis Sapient"
          width={30}
          height={30}
        />
      ),
      description: (
        <>
          <p>
            Publicis Sapient is a global digital consulting firm specializing in
            digital business transformation, helping companies adapt to
            technological and societal changes by providing services like
            strategy, customer experience design, technology engineering, data &
            AI solutions, and digital product management across various
            industries.
          </p>

          <div>
            As a frontend developer at Publicis Sapient, I had the following
            responsibilities and accomplishments:
            <ul>
              <li>
                <strong>
                  Designed and Developed Responsive Email Templates:
                </strong>{" "}
                Crafted mobile-friendly HTML and CSS email templates that are
                visually engaging and optimized for diverse devices.
              </li>
              <li>
                <strong>Streamlined Email Communication Processes:</strong>{" "}
                Collaborated with cross-functional teams to implement efficient
                workflows for transactional and non-transactional emails,
                improving communication accuracy.
              </li>
              <li>
                <strong>Built a Customizable Email Template Platform:</strong>{" "}
                Developed a frontend solution allowing organizations to easily
                customize and manage branded email templates, enhancing customer
                engagement.
              </li>
              <li>
                <strong>Collaborated on Automated Email Campaigns:</strong>{" "}
                Partnered with automation teams to create and manage a system
                for seamless email campaign deployment, tracking, and
                performance analysis.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore technologies such as HTML
            templates, Email templates, Email tracking, and customer engagement.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Next.js",
        "Typescript",
        "Storybook",
        "Tailwind CSS",
        "HTML Template",
        "Email Template",
        "CSS",
        "JavaScript",
      ],
      links: [
        <ExternalLink to="https://www.publicissapient.com/">
          Publicis Sapient
        </ExternalLink>,
      ],
    },
    {
      title: (
        <ExternalLink to="https://www.solutelabs.com/">
          <h3>
            Solutelabs: SoluteLabs crafts digital solutions using AI, Product
            Engineering and UI/UX design.
          </h3>
        </ExternalLink>
      ),
      logo: (
        <img src={SolutelabsIcon} alt="Solutelabs" width={30} height={30} />
      ),
      description: (
        <>
          <p>
            Solutelabs provides end-to-end product development agencies helping
            businesses of all sizes, from startups with big ideas to enterprises
            on a digital transformation path.
          </p>

          <div>
            As a frontend developer at Solutelabs, I had the following
            responsibilities and accomplishments:
            <ul>
              <li>
                <strong>Developed Sangam Health App:</strong> Built a
                React-based application to assist healthcare professionals in
                managing patient medications and ensuring schedule adherence.
              </li>
              <li>
                <strong>Implemented Prescription Scheduling System:</strong>{" "}
                Focused on frontend development for a dynamic and responsive
                prescription scheduling feature using HTML, CSS, Tailwind CSS,
                JavaScript, React.js, Next.js, and TypeScript.
              </li>
              <li>
                <strong>Engineered Live History India Platform:</strong>{" "}
                Developed a Next.js platform showcasing rich Indian historical
                content, integrating with SanityCMS for flexible content
                management.
              </li>
              <li>
                <strong>
                  Integrated Sanity.io CMS for Dynamic Content Management:
                </strong>{" "}
                Enabled admins to manage various content types—articles,
                blogs, podcasts, stories, movies, and books—through seamless
                Sanity.io integration.
              </li>
              <li>
                <strong>Crafted Engaging Frontend Experience:</strong>{" "}
                Delivered a robust and engaging UI leveraging HTML, CSS,
                Tailwind CSS, JavaScript, React.js, Next.js, and TypeScript to
                support content-driven experiences.
              </li>
            </ul>
          </div>
          <p>
            This project allowed me to explore how technology can be used to
            solve real-world problems and how to build a product that is
            scalable and user-friendly.
          </p>
        </>
      ),
      tags: [
        "React.js",
        "Next.js",
        "Typescript",
        "Storybook",
        "Tailwind CSS",
        "HTML Template",
        "Email Template",
        "CSS",
        "JavaScript",
      ],
      links: [
        <ExternalLink to="https://www.solutelabs.com/">
          Solutelabs
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
