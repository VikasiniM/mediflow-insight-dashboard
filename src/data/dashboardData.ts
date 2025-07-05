
import { DashboardCard, NavigationItem, LiveStats, KPIData } from '../types/dashboard';

export const navigationItems: NavigationItem[] = [
  { id: 'request-services', title: 'Request Services', path: '/request-services', icon: '🔄' },
  { id: 'services', title: 'Services', path: '/services', icon: '⚕️' },
  { id: 'tickets', title: 'Tickets', path: '/tickets', icon: '🎫' },
  { id: 'calendar', title: 'Calendar', path: '/calendar', icon: '📅' },
];

export const dashboardCards: DashboardCard[] = [
  {
    id: 'regulatory-docs',
    title: 'Regulatory Documents',
    description: 'FDA compliance, licenses, and regulatory filings',
    icon: '📋',
    category: 'documents',
    accessLevel: ['admin'],
    count: 24,
    status: 'active'
  },
  {
    id: 'commercial-docs',
    title: 'Commercial Documents',
    description: 'Contracts, agreements, and commercial paperwork',
    icon: '💼',
    category: 'documents',
    accessLevel: ['admin'],
    count: 18,
    status: 'active'
  },
  {
    id: 'external-contract',
    title: 'External Contract',
    description: 'Third-party vendor and supplier contracts',
    icon: '🤝',
    category: 'documents',
    accessLevel: ['admin'],
    count: 12,
    status: 'pending'
  },
  {
    id: 'owner-docs',
    title: 'Owner Documents',
    description: 'Ownership certificates and legal documents',
    icon: '🏢',
    category: 'documents',
    accessLevel: ['admin'],
    count: 8,
    status: 'active'
  },
  {
    id: 'service-price-list',
    title: 'Service Price List',
    description: 'Current pricing for all medical services',
    icon: '💰',
    category: 'management',
    accessLevel: ['doctor', 'admin'],
    count: 156,
    status: 'active'
  },
  {
    id: 'cme-training',
    title: 'CME and Medical Training Records',
    description: 'Continuing medical education and training logs',
    icon: '🎓',
    category: 'training',
    accessLevel: ['doctor', 'admin'],
    count: 45,
    status: 'active'
  },
  {
    id: 'hpl-applications',
    title: 'HPL Applications',
    description: 'Hospital privilege level applications',
    icon: '📄',
    category: 'compliance',
    accessLevel: ['admin'],
    count: 7,
    status: 'pending'
  },
  {
    id: 'human-resources',
    title: 'Human Resources',
    description: 'Staff records, schedules, and HR documents',
    icon: '👥',
    category: 'management',
    accessLevel: ['admin'],
    count: 89,
    status: 'active'
  },
  {
    id: 'facility-policy',
    title: 'Facility Policy',
    description: 'Hospital policies and procedure guidelines',
    icon: '📜',
    category: 'compliance',
    accessLevel: ['doctor', 'admin'],
    count: 34,
    status: 'active'
  },
  {
    id: 'clinical-guideline',
    title: 'Clinical Guideline',
    description: 'Medical protocols and clinical procedures',
    icon: '🩺',
    category: 'compliance',
    accessLevel: ['doctor', 'admin'],
    count: 67,
    status: 'active'
  },
  {
    id: 'inspection-checklist',
    title: 'Inspection Checklist',
    description: 'Quality assurance and inspection protocols',
    icon: '✅',
    category: 'compliance',
    accessLevel: ['admin'],
    count: 15,
    status: 'completed'
  },
  {
    id: 'forms-checklist',
    title: 'Forms and Daily Checklist',
    description: 'Daily operational forms and checklists',
    icon: '📝',
    category: 'management',
    accessLevel: ['doctor', 'admin'],
    count: 28,
    status: 'active'
  },
  {
    id: 'kpi',
    title: 'Key Performance Indicator',
    description: 'Hospital performance metrics and analytics',
    icon: '📊',
    category: 'management',
    accessLevel: ['doctor', 'admin'],
    count: 12,
    status: 'active'
  },
  {
    id: 'audit-reports',
    title: 'Audit Reports',
    description: 'Internal and external audit findings',
    icon: '🔍',
    category: 'compliance',
    accessLevel: ['admin'],
    count: 6,
    status: 'completed'
  },
  {
    id: 'rooms-infrastructure',
    title: 'Rooms and Infrastructure',
    description: 'Facility management and room assignments',
    icon: '🏥',
    category: 'management',
    accessLevel: ['admin'],
    count: 142,
    status: 'active'
  }
];

export const liveStats: LiveStats = {
  pendingTickets: 3,
  upcomingTrainings: 2,
  activePatients: 127,
  completedAudits: 4
};

export const kpiData: KPIData[] = [
  { name: 'Patient Satisfaction', value: 92, color: '#14b8a6' },
  { name: 'Staff Efficiency', value: 88, color: '#06b6d4' },
  { name: 'Compliance Rate', value: 96, color: '#10b981' },
  { name: 'Response Time', value: 84, color: '#f59e0b' }
];
