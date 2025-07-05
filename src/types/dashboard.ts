
export interface DashboardCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'documents' | 'training' | 'management' | 'compliance';
  accessLevel: ('doctor' | 'admin')[];
  count?: number;
  status?: 'active' | 'pending' | 'completed';
}

export interface LiveStats {
  pendingTickets: number;
  upcomingTrainings: number;
  activePatients: number;
  completedAudits: number;
}

export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  icon: string;
}

export type UserRole = 'doctor' | 'admin';

export interface KPIData {
  name: string;
  value: number;
  color: string;
}
