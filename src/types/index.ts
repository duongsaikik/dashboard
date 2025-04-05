export interface Product {
  id: string;
  name: string;
  quantity: number;
  growth?: number;
  decline?: number;
}

export interface ProductionPlan {
  name: string;
  plan: number;
  actual: number;
}

export interface Customer {
  name: string;
  quantity: number;
}

export interface ProductionStatus {
  completed: {
    amount: number;
    progress: number;
  };
  inProgress: {
    amount: number;
    progress: number;
  };
  pending: {
    amount: number;
    progress: number;
  };
}

export interface ProductionProgressData {
  id: string;
  name: string;
  progress: number;
  amount: number;
  type: string;
}

export interface Material {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  description?: string;
  image?: string;
}

export interface DashboardData {
  topProducts: Product[];
  productionPlan: ProductionPlan[];
  topCustomers: Customer[];
  productionStatus: ProductionStatus;
  productionProgress: ProductionProgressData[];
  materials: Material[];
}

export interface MenuItem {
  value: string;
  label: string;
}
