window.siteContent = {
    profile: {
        name: "Manyabar Das",
        role: "Reliability / Infrastructure / DevOps",
        headline: "I build delivery systems, hybrid infrastructure, and calmer operations.",
        bio: "Reliability and infrastructure engineer with 10+ years across IT support, systems administration, cloud operations, and SRE. I build and stabilize the systems behind software delivery — CI/CD, Azure infrastructure, hybrid environments, identity, and the operational guardrails that keep teams moving reliably.",
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
            "Over time I moved from keeping endpoints and users functioning, to owning infrastructure, and then to reliability work closer to delivery pipelines, cloud platforms, and operational guardrails. The through-line has stayed the same: remove friction, reduce avoidable failure, and leave systems easier to understand than I found them."
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
                "Migrated QA pipelines from Jenkins to GitHub Actions, reducing pipeline maintenance overhead and aligning with team-owned workflows already in GitHub.",
                "Supported reliability and delivery operations for distributed systems serving Saudia, Southwest, and NEOM — environments where safe change and operational discipline are non-negotiable.",
                "Maintained and improved CI/CD processes for large-scale travel infrastructure, coordinating across teams to reduce deployment friction.",
                "Worked on monitoring, alerting, and observability improvements to catch issues earlier in the delivery cycle.",
                "Handled incident response and post-incident reviews with a focus on systemic fixes over repeated workarounds."
            ],
            stack: ["GitHub Actions", "Jenkins", "Azure", "CI/CD", "Distributed systems", "Incident response"]
        },
        {
            period: "Jul 2022 – Feb 2024",
            mode: "Remote",
            title: "Infrastructure Engineer",
            company: "Jumio Corp — identity verification for KYC and compliance",
            bullets: [
                "Consolidated fragmented Azure subscriptions and cleaned up orphaned resources, reducing cloud spend by approximately $60k per year.",
                "Deployed Azure AD Connect Sync to bridge on-prem Active Directory with Azure AD, enabling consistent identity across hybrid environments.",
                "Rolled out LogicMonitor for unified observability across on-prem and Azure infrastructure, replacing blind spots with structured alerting.",
                "Managed Cloudflare DNS migration with zero public IP exposure, using Cloudflare tunnels to eliminate inbound firewall rules.",
                "Provisioned and maintained infrastructure for SUSE Rancher-based Kubernetes platform, including Harbor container registry."
            ],
            stack: ["Azure", "Azure AD", "AD Connect", "LogicMonitor", "Cloudflare", "Rancher", "Kubernetes", "Harbor"]
        },
        {
            period: "Aug 2017 – Jul 2022",
            mode: "Remote",
            title: "System Administrator → Senior System Administrator",
            company: "Optym — supply-chain optimization for transportation and logistics",
            bullets: [
                "Built Terraform and Ansible automation for VM provisioning and configuration management across VMware vSphere, reducing setup time and manual drift.",
                "Managed production, UAT, and development infrastructure across Azure and on-prem VMware environments.",
                "Migrated datacenter workloads and expanded IaaS footprint as the organization moved workloads off legacy hardware.",
                "Administered Octopus Deploy and TeamCity for application delivery, managing deployment pipelines for internal products.",
                "Maintained HAProxy, NGINX, and IIS load balancing and web serving across environments; managed SSL certificates and DNS."
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
            title: "Enterprise infrastructure automation and datacenter migration",
            body: "At Optym, built VM provisioning and configuration automation from scratch using Terraform and Ansible across VMware vSphere. Reduced manual provisioning effort significantly, eliminated environment drift, and supported a datacenter migration that moved workloads to a modern IaaS footing."
        },
        {
            context: "Octopus Deploy · GitHub Actions · CI/CD",
            title: "CD pipeline optimization and Jenkins to GitHub Actions migration",
            body: "At Amadeus, migrated QA pipelines from Jenkins to GitHub Actions, consolidating pipeline ownership inside teams already using GitHub. At Optym, optimized Octopus Deploy release pipelines to reduce deployment friction across multiple environments."
        },
        {
            context: "Azure · CSP · tenant management",
            title: "Azure tenant consolidation saving ~$60k/year",
            body: "At Jumio, audited fragmented Azure subscriptions across CSP accounts, identified orphaned resources and redundant spend, and consolidated environments. The cleanup reduced annual Azure cost by approximately $60k and made the infrastructure state legible enough to manage."
        },
        {
            context: "SUSE Rancher · Kubernetes · Harbor",
            title: "Self-hosted Kubernetes platform with Rancher",
            body: "At Jumio, provisioned and maintained a self-hosted Kubernetes platform using SUSE Rancher, including cluster management, workload scheduling, and Harbor as an internal container registry — giving the engineering team a private, controlled image distribution layer."
        },
        {
            context: "Cloudflare · DNS · WAF · tunnels",
            title: "DNS migration to Cloudflare with zero public IP exposure",
            body: "At Jumio, migrated DNS to Cloudflare and adopted Cloudflare tunnels to terminate inbound connectivity without exposing public IPs or opening inbound firewall rules. Added WAF rules as a protective layer in front of public-facing services."
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
