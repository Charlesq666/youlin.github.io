export interface Entry {
  title: string
  organization: string
  location?: string
  start: string
  end: string
  highlights: string[]
}

export interface Education {
  school: string
  degree: string
  location: string
  start: string
  end: string
}

export const profile = {
  name: 'Youlin Qu',
  headline: 'Software Engineer at Google',
  location: 'Greater Seattle Area',
  summary: 'Software engineer at Google who builds backend services, data pipelines and LLM-powered tools. M.S. in Electrical and Computer Engineering from Carnegie Mellon University.',
  avatar: 'avatar.svg',
  email: 'chalice.chu@gmail.com',
  github: 'https://github.com/Charlesq666',
  linkedin: 'https://www.linkedin.com/in/youlin-qu-2517a6131'
}

export const education: Education[] = [
  {
    school: 'Carnegie Mellon University',
    degree: 'M.S. in Electrical and Computer Engineering',
    location: 'Pittsburgh, PA',
    start: 'Jan 2025',
    end: 'May 2026'
  },
  {
    school: 'University of Wisconsin–Madison',
    degree: 'B.S. in Computer Science, Data Science',
    location: 'Madison, WI',
    start: 'Sep 2019',
    end: 'May 2023'
  }
]

export const experience: Entry[] = [
  {
    title: 'Software Engineer',
    organization: 'Google',
    location: 'Seattle, WA',
    start: 'Jun 2026',
    end: 'Present',
    highlights: []
  },
  {
    title: 'Software Engineer Intern',
    organization: 'ByteDance',
    location: 'Beijing, China',
    start: 'May 2025',
    end: 'Aug 2025',
    highlights: [
      'Maintained and enhanced ByteDance\'s global voucher logistics platform, the core infrastructure powering voucher creation, retrieval and redemption across all ByteDance e-commerce markets, including TikTok Shop.',
      'Developed an auto-responding Larkbot that queries Redis and MySQL, enabling one-click data inconsistency checks and reducing manual log searches and compliance work by 80%.',
      'Built a troubleshooting toolkit in Go with a parameter-store configuration layer, eliminating manual redeploys on dependency changes and reducing DevOps effort by 50%.',
      'Supported batch shop code customization in voucher creation using Kitex and aggregated batch requests, reducing server response time by 80%.',
      'Created SQL data reconciliation scripts deployed on RECAS for daily automated consistency checks and inconsistency notifications.'
    ]
  },
  {
    title: 'Software Engineer',
    organization: 'Coldreach (YC W23)',
    location: 'Remote, US',
    start: 'Sep 2023',
    end: 'Nov 2024',
    highlights: [
      'Designed multi-level nested PostgreSQL queries, reworking the retrieval schema to support arbitrarily nested queries and simplifying them with mathematical expressions.',
      'Built a group-fair FIFO queue from scratch on Redis, using a group master queue and sub-queues to stay consistent and performant while keeping groups fair.',
      'Used Qdrant as the retrieval layer of a RAG system over 1 million records, improving LLM binary-decision accuracy by 30%.',
      'Implemented tRPC in a TypeScript monorepo for frontend/backend communication, speeding up integration by 50%.',
      'Built an automated data pipeline on AWS S3, Lambda and OpenSearch handling more than 10 million records.',
      'Refactored the backend around inversion of control with Awilix, removing redundant dependencies and improving development speed by 30%.',
      'Applied prompt engineering to cut hallucination rate by 50%, helping the sales team raise its closing rate by 10%.'
    ]
  }
]

export const skills = {
  'Languages': ['TypeScript', 'Python', 'Go', 'JavaScript', 'Java', 'C++', 'C'],
  'Backend': ['gRPC', 'Kitex', 'REST', 'FastAPI', 'Flask', 'Node.js', 'Kafka'],
  'Frontend': ['Nuxt', 'Next.js'],
  'Data & Infra': ['SQL', 'NoSQL', 'Spark', 'AWS Lambda', 'AWS S3', 'Kubernetes', 'Terraform', 'Docker'],
  'Tools': ['Git', 'Linux', 'GDB', 'Vim']
}
