export const projectTimeline = [
  { id: 1, date: 'Mar 17', title: 'Kickoff Workshop', status: 'completed' },
  { id: 2, date: 'March 18', title: 'Data Collection', status: 'completed' },
  { id: 3, date: 'May 8', title: 'Initial Phase', status: 'current' },
  { id: 4, date: 'May 9–July 12', title: 'Verification', status: 'upcoming' },
  { id: 5, date: 'July 13', title: 'Completion Reviews', status: 'upcoming' },
  { id: 6, date: 'August 21', title: 'Cycle Conclusion', status: 'upcoming' },
]

export const dashboardStats = [
  { 
    id: 1, 
    value: '78.65%', 
    label: 'Overall Progress', 
    icon: 'progress',
    color: '#ef4444'
  },
  { 
    id: 2, 
    value: '95', 
    label: 'Total Criteria', 
    icon: 'criteria',
    color: '#f59e0b'
  },
  { 
    id: 3, 
    value: '52', 
    label: 'Completed Criteria', 
    icon: 'completed',
    color: '#3b82f6'
  },
  { 
    id: 4, 
    value: '386', 
    label: 'Evidence Documents', 
    icon: 'documents',
    color: '#8b5cf6'
  },
  { 
    id: 5, 
    value: '302', 
    label: 'Evidence (Completed)', 
    icon: 'evidence',
    color: '#10b981'
  },
  { 
    id: 6, 
    value: '258', 
    label: 'Uploaded To DGA', 
    icon: 'uploaded',
    color: '#06b6d4'
  },
]

export const progressCategories = [
  {
    id: 1,
    name: 'Strategy And Planning',
    percentage: '97.78%',
    status: 'completed',
    subcategories: [
      { name: 'Digital Transformation', items: [1, 2, 3], statuses: ['completed', 'completed', 'completed'] },
      { name: 'Digital Governance', items: [1, 2, 3], statuses: ['completed', 'completed', 'completed'] },
      { name: 'Enterprise Architecture', items: [1, 2, 3, 4], statuses: ['completed', 'completed', 'completed', 'completed'] },
    ]
  },
  {
    id: 2,
    name: 'Organization And Culture',
    percentage: '70.83%',
    status: 'in-progress',
    subcategories: [
      { name: 'Digital Culture And Environment', items: [1, 2, 3], statuses: ['completed', 'in-progress', 'completed'] },
      { name: 'Leadership Development', items: [1, 2, 3, 4], statuses: ['completed', 'completed', 'completed', 'in-progress'] },
      { name: 'Skills & Capacity Building', items: [1, 2, 3], statuses: ['completed', 'in-progress', 'completed'] },
    ]
  },
  {
    id: 3,
    name: 'Operations And Execution',
    percentage: '80.00%',
    status: 'in-progress',
    subcategories: [
      { name: 'Business Processes', items: [1, 2, 3, 4], statuses: ['completed', 'completed', 'in-progress', 'completed'] },
    ]
  },
  {
    id: 4,
    name: 'Business Continuity',
    percentage: '90.59%',
    status: 'completed',
    subcategories: [
      { name: 'Risk Management', items: [1, 2, 3, 4, 5], statuses: ['completed', 'completed', 'completed', 'completed', 'in-progress'] },
      { name: 'Business Continuity', items: [1, 2, 3, 4, 5, 6, 7], statuses: ['completed', 'completed', 'not-started', 'in-progress', 'in-progress', 'not-started', 'not-started'] },
    ]
  },
  {
    id: 5,
    name: 'Information Technology',
    percentage: '75.00%',
    status: 'in-progress',
    subcategories: [
      { name: 'Support Systems', items: [1, 2, 3, 4, 5], statuses: ['completed', 'in-progress', 'completed', 'in-progress', 'completed'] },
      { name: 'IT Infrastructure', items: [1, 2, 3, 4, 5, 6, 7], statuses: ['completed', 'in-progress', 'completed', 'in-progress', 'completed', 'in-progress', 'not-started'] },
      { name: 'Cloud Infrastructure', items: [1, 2, 3], statuses: ['completed', 'completed', 'completed'] },
    ]
  },
  {
    id: 6,
    name: 'Comprehensive Governance',
    percentage: '64.44%',
    status: 'in-progress',
    subcategories: [
      { name: 'Governance Platforms', items: [1, 2, 3, 4, 5, 6, 7, 8, 9], statuses: ['completed', 'in-progress', 'completed', 'in-progress', 'completed', 'in-progress', 'completed', 'in-progress', 'not-started'] },
    ]
  },
  {
    id: 7,
    name: 'Channels And Services',
    percentage: '100%',
    status: 'fully-uploaded',
    subcategories: [
      { name: 'Service Quality', items: [1, 2, 3], statuses: ['completed', 'completed', 'completed'] },
      { name: 'Digital Channels', items: [1, 2, 3, 4], statuses: ['completed', 'completed', 'completed', 'completed'] },
    ]
  },
  {
    id: 8,
    name: 'Beneficiary Centralization',
    percentage: '60.00%',
    status: 'partially-uploaded',
    subcategories: [
      { name: 'User Engagement', items: [1, 2, 3], statuses: ['completed', 'in-progress', 'completed'] },
      { name: 'User Relationship', items: [1, 2, 3], statuses: ['completed', 'in-progress', 'completed'] },
      { name: 'User Experience', items: [1, 2, 3, 4, 5], statuses: ['completed', 'in-progress', 'completed', 'in-progress', 'completed'] },
    ]
  },
  {
    id: 9,
    name: 'Government Data',
    percentage: '87.50%',
    status: 'completed',
    subcategories: [
      { name: 'Data Governance', items: [1, 2, 3], statuses: ['completed', 'in-progress', 'completed'] },
      { name: 'Data Usage & Availability', items: [1, 2, 3], statuses: ['completed', 'completed', 'completed'] },
      { name: 'Open Data', items: [1, 2, 3], statuses: ['completed', 'in-progress', 'completed'] },
    ]
  },
  {
    id: 10,
    name: 'Research And Innovation',
    percentage: '17.65%',
    status: 'delayed',
    subcategories: [
      { name: 'Innovation', items: [1, 2, 3, 4], statuses: ['completed', 'in-progress', 'delayed', 'delayed'] },
      { name: 'Creative Solutions', items: [1, 2], statuses: ['delayed', 'in-progress'] },
    ]
  },
]

export const complianceScore = {
  percentage: 65,
  label: 'Basic Standards 2025'
}

export const topLeaders = [
  { id: 1, name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96, avatar: 'AA' },
  { id: 2, name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective', score: 94, avatar: 'SA' },
  { id: 3, name: 'Mohammad Al-Mansour', perspective: 'IT Perspective', score: 92, avatar: 'MA' },
]

export const recentActivities = [
  { 
    id: 1, 
    text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', 
    time: '5 Mins Ago',
    type: 'upload'
  },
  { 
    id: 2, 
    text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', 
    time: '20 Mins Ago',
    type: 'task'
  },
  { 
    id: 3, 
    text: 'New Criterion "5.3 Digital Identity" Was Created By Admin', 
    time: '1 Hour Ago',
    type: 'create'
  },
]

export const monthlyPerformance = [
  { month: 'Jan', value: 82 },
  { month: 'Feb', value: 78 },
  { month: 'Mar', value: 75 },
  { month: 'Apr', value: 40 },
  { month: 'May', value: 85 },
  { month: 'Jun', value: 88 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 78 },
  { month: 'Sept', value: 72 },
  { month: 'Oct', value: 58 },
  { month: 'Nov', value: 80 },
  { month: 'Dec', value: 75 },
]

export const auditReadiness = {
  percentage: 80,
  overdueStds: 12,
  missingEvidence: 5
}

export const statusLegend = [
  { label: 'Not Started', color: '#9ca3af' },
  { label: 'In Progress', color: '#f59e0b' },
  { label: 'Completed', color: '#10b981' },
  { label: 'Partially Uploaded', color: '#3b82f6' },
  { label: 'Fully Uploaded', color: '#06b6d4' },
  { label: 'Delayed', color: '#ef4444' },
]


export const detailsPageData = {
  id: 1,
  title: 'Digital Transformation Strategic Planning',
  category: 'Strategy & Planning',
  description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  evidence: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1
  },
  sections: {
    objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
    implementationRequirements: [
      'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
      'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
      'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.'
    ],
    evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    scope: 'All Government Entities.'
  },
  leaders: [
    { id: 1, name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: 'AA' },
    { id: 2, name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: 'AA' }
  ],
  evidenceDocuments: [
    {
      id: 1,
      documentNumber: '5.4.1.1',
      documentName: 'Digital_Transformation_Plan.Pdf',
      documentLead: 'Ahmed Khaled',
      documentPreparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Approved'
    },
    {
      id: 2,
      documentNumber: '5.4.1.2',
      documentName: 'KPI_Framework.Xlsx',
      documentLead: 'Mona Hamed',
      documentPreparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review'
    },
    {
      id: 3,
      documentNumber: '5.4.1.3',
      documentName: 'Roadmap_Version1.Docx',
      documentLead: 'Rami AlSharif',
      documentPreparer: 'Rami AlSharif',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review'
    }
  ],
  comments: [
    {
      id: 1,
      user: 'Sara Ibrahim',
      initial: 'E',
      date: '2025-08-05',
      text: 'Ensure The Plan Includes A Clear Governance Model.'
    },
    {
      id: 2,
      user: 'Mona Hamed',
      initial: 'M',
      date: '2025-08-05',
      text: 'Ensure The Plan Includes A Clear Governance Model.'
    }
  ],
  evidenceActivities: [
    {
      id: 1,
      text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
      time: '5 Mins Ago'
    },
    {
      id: 2,
      text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
      time: '20 Mins Ago'
    },
    {
      id: 3,
      text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
      time: '1 Hour Ago'
    }
  ]
}