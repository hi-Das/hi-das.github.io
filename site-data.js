window.siteContent = {
    profile: {
        name: "Manyabar Das",
        role: "Platform Reliability / Infrastructure",
        headline: "I build infrastructure and delivery systems that teams can operate under pressure.",
        bio: "Reliability and infrastructure engineer with 10+ years across IT support, systems administration, cloud operations, and SRE. I work on the systems behind software delivery: CI/CD, Azure and hybrid infrastructure, identity, observability, and incident response practices that make production easier to run.",
        email: "hi-das@outlook.com",
        linkedin: "https://linkedin.com/in/manyabar",
        github: "https://github.com/hi-Das",
        meta: ["Bengaluru, India · UTC+5:30", "US B1 visa", "60-day notice", "Open to remote and hybrid roles"]
    },
    signals: [
        {
            value: "10+",
            label: "Years across IT support, infrastructure, and reliability engineering"
        },
        {
            value: "~$60k/yr",
            label: "Azure savings from subscription consolidation and cleanup"
        },
        {
            value: "Jenkins -> GHA",
            label: "Recent delivery modernization work in enterprise environments"
        }
    ],
    story: {
        intro: [
            "I did not enter tech through a clean platform-engineering path. I started in IT support, where the work is immediate, messy, and impossible to fake. That background still shapes how I think: systems are only good if people can actually operate them when something goes wrong.",
            "Over time I moved from keeping endpoints and users functioning, to owning infrastructure, and then to reliability work closer to delivery pipelines, cloud platforms, and operational guardrails. The through-line has stayed the same: remove friction, reduce avoidable failure, and leave systems easier to understand than I found them.",
            "Most of my production work has been on Azure, but the fundamentals matter more to me than the brand of cloud. I understand compute, networking, and storage well enough to move across cloud environments and work from first principles."
        ],
        chapters: [
            {
                step: "01",
                title: "Started where failure is visible",
                body: "My first roles were support-heavy. That taught me patience, direct communication, and a practical respect for operations. When someone is blocked, elegant architecture matters less than whether the system is understandable and recoverable."
            },
            {
                step: "02",
                title: "Moved into infrastructure ownership",
                body: "At Optym and Jumio, the work became broader: provisioning, hybrid environments, automation, delivery tooling, DNS, identity, and day-2 operations. I learned to connect individual fixes to platform-level leverage."
            },
            {
                step: "03",
                title: "Now I optimize change and reliability",
                body: "In reliability engineering, the interesting problems are rarely isolated. They sit between teams, pipelines, infrastructure, and incident handling. That is the layer I like working in most: where better systems produce calmer teams."
            }
        ],
        principles: [
            {
                title: "Operate for clarity",
                body: "I prefer systems that are observable, legible, and boring in the right ways over clever setups that only their authors can debug."
            },
            {
                title: "Automate the repeated pain",
                body: "Automation matters most when it removes recurring operational drag: environment creation, deployment flow, identity plumbing, and routine recovery work."
            },
            {
                title: "Protect delivery speed with guardrails",
                body: "The goal is not to slow teams down. It is to make safe change the default so teams can move faster without creating future incident debt."
            }
        ]
    },
    experience: [
        {
            period: "Feb 2024 – Present",
            mode: "Hybrid",
            title: "Reliability Engineer",
            company: "Amadeus Labs — travel tech powering airline booking worldwide",
            bullets: [
                "Migrated QA pipelines from Jenkins to GitHub Actions and moved pipeline ownership closer to product teams already working in GitHub.",
                "Supported reliability and release operations for distributed booking systems used by Saudia, Southwest, and NEOM.",
                "Maintained CI/CD paths across environments and worked with multiple teams to reduce failed or blocked deployments.",
                "Improved monitoring and alert coverage so failures were detected earlier in the delivery cycle.",
                "Participated in incident response and post-incident reviews, documenting follow-up actions to avoid repeat failures."
            ],
            stack: ["GitHub Actions", "Jenkins", "Azure", "CI/CD", "Distributed systems", "Incident response"]
        },
        {
            period: "Jul 2022 – Feb 2024",
            mode: "Remote",
            title: "Infrastructure Engineer",
            company: "Jumio Corp — identity verification for KYC and compliance",
            bullets: [
                "Consolidated fragmented Azure subscriptions and removed orphaned resources, reducing cloud spend by about $60k per year.",
                "Implemented Azure AD Connect Sync to bridge on-prem Active Directory with Azure AD for consistent hybrid identity.",
                "Rolled out LogicMonitor across on-prem and Azure systems to centralize metrics and alerting.",
                "Migrated DNS to Cloudflare and used Cloudflare Tunnels so services stayed reachable without exposing public IPs.",
                "Provisioned and maintained a SUSE Rancher-based Kubernetes platform, including Harbor as the internal image registry."
            ],
            stack: ["Azure", "Azure AD", "AD Connect", "LogicMonitor", "Cloudflare", "Rancher", "Kubernetes", "Harbor"]
        },
        {
            period: "Aug 2017 – Jul 2022",
            mode: "Remote",
            title: "System Administrator → Senior System Administrator",
            company: "Optym — supply-chain optimization for transportation and logistics",
            bullets: [
                "Built Terraform and Ansible automation for VM provisioning and configuration management on VMware vSphere.",
                "Managed production, UAT, and development infrastructure across Azure and on-prem VMware.",
                "Supported datacenter workload migration and expansion of the Azure IaaS footprint.",
                "Administered Octopus Deploy and TeamCity pipelines used for internal product releases.",
                "Maintained HAProxy, NGINX, and IIS load balancing and web serving; managed SSL certificates and DNS."
            ],
            stack: ["Terraform", "Ansible", "VMware vSphere", "Azure", "PowerShell", "Octopus Deploy", "TeamCity", "HAProxy", "NGINX"]
        },
        {
            period: "Sep 2016 – Aug 2017",
            mode: "On-site",
            title: "IT Support Engineer",
            company: "Tech Mahindra — global IT services and consulting",
            bullets: [
                "Handled support incidents, hardware issues, and day-to-day user requests in a high-volume enterprise environment.",
                "Troubleshot Windows workstations, printers, network access, and application issues under SLA pressure.",
                "Developed communication habits and operational instincts that continue to inform incident handling today."
            ],
            stack: ["Windows", "Active Directory", "IT support", "Troubleshooting"]
        }
    ],
    impact: [
        {
            context: "Terraform · Ansible · vSphere · PowerShell",
            title: "Infrastructure automation for repeatable VM provisioning",
            body: "At Optym, built Terraform and Ansible workflows for VM provisioning and baseline configuration on VMware vSphere. This replaced ticket-driven manual setup with a repeatable process and supported datacenter migration work."
        },
        {
            context: "Octopus Deploy · GitHub Actions · CI/CD",
            title: "Delivery pipeline modernization and simplification",
            body: "At Amadeus, migrated QA pipelines from Jenkins to GitHub Actions so delivery workflows lived where teams already worked. At Optym, maintained and tuned Octopus Deploy release pipelines across environments."
        },
        {
            context: "Azure · CSP · tenant management",
            title: "Azure tenant consolidation saving ~$60k/year",
            body: "At Jumio, audited fragmented Azure subscriptions across CSP accounts, removed orphaned resources, and consolidated environments. The cleanup reduced annual Azure spend by about $60k and made ownership boundaries clearer."
        },
        {
            context: "SUSE Rancher · Kubernetes · Harbor",
            title: "Self-hosted Kubernetes platform operations",
            body: "At Jumio, provisioned and maintained a self-hosted Kubernetes platform using SUSE Rancher, with Harbor as the internal container registry for controlled image distribution."
        },
        {
            context: "Cloudflare · DNS · WAF · tunnels",
            title: "DNS migration to Cloudflare with zero public IP exposure",
            body: "At Jumio, migrated DNS to Cloudflare and adopted Cloudflare Tunnels so inbound access did not require exposing public IPs or opening inbound firewall rules. Added WAF rules in front of public-facing services."
        }
    ],
    toolbox: [
        { category: "Cloud", items: ["Azure (primary)", "AWS (some)", "Hybrid cloud", "VMware vSphere"] },
        { category: "Containers", items: ["Kubernetes", "Docker", "Rancher", "Harbor"] },
        { category: "Automation", items: ["Terraform", "Ansible", "PowerShell", "Bash"] },
        { category: "CI/CD", items: ["GitHub Actions", "Octopus Deploy", "TeamCity", "Jenkins"] },
        { category: "Web / routing", items: ["NGINX", "HAProxy", "IIS", "Cloudflare", "Azure LB"] },
        { category: "Identity", items: ["Azure AD", "Active Directory", "Keycloak"] },
        { category: "Monitoring", items: ["LogicMonitor", "PRTG", "Azure Monitor"] },
        { category: "Databases", items: ["SQL Server", "PostgreSQL", "Azure SQL", "MongoDB"] },
        { category: "Version control", items: ["GitHub", "Bitbucket"] }
    ],
    certifications: [
        { name: "Microsoft Certified: Azure Administrator (AZ-104)", issuer: "Microsoft", year: "2026" },
        { name: "GitHub Actions (GH-200)", issuer: "GitHub", year: "2026" },
        { name: "SUSE Certified: Rancher 2.5", issuer: "SUSE", year: "2021" }
    ],
    footer: ""
};
