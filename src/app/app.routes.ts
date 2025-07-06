import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login';
import { RegisterComponent } from './pages/auth/register/register';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout';

// Dashboard Pages
import { HomeComponent } from './pages/dashboard/home/home';

// Customers
import { ListComponent as CustomerListComponent } from './pages/dashboard/customers/list/list';
import { NewComponent as CustomerNewComponent } from './pages/dashboard/customers/new/new';
import { DebtComponent as CustomerDebtComponent } from './pages/dashboard/customers/debt/debt';

// Products
import { ListComponent as ProductListComponent } from './pages/dashboard/products/list/list';
import { NewComponent as ProductNewComponent } from './pages/dashboard/products/new/new';
import { StockComponent as ProductStockComponent } from './pages/dashboard/products/stock/stock';

// Invoices
import { ListComponent as InvoiceListComponent } from './pages/dashboard/invoices/list/list';
import { NewComponent as InvoiceNewComponent } from './pages/dashboard/invoices/new/new';
import { EarchiveComponent } from './pages/dashboard/invoices/earchive/earchive';

// Expenses
import { ListComponent as ExpenseListComponent } from './pages/dashboard/expenses/list/list';
import { NewComponent as ExpenseNewComponent } from './pages/dashboard/expenses/new/new';

// Income
import { ListComponent as IncomeListComponent } from './pages/dashboard/income/list/list';
import { NewComponent as IncomeNewComponent } from './pages/dashboard/income/new/new';
import { CategoriesComponent as IncomeCategoriesComponent } from './pages/dashboard/income/categories/categories';

// Bank
import { CashComponent } from './pages/dashboard/bank/cash/cash';
import { AccountsComponent } from './pages/dashboard/bank/accounts/accounts';
import { TransferComponent } from './pages/dashboard/bank/transfer/transfer';

// Reports
import { DailyComponent } from './pages/dashboard/reports/daily/daily';
import { CustomerComponent as ReportCustomerComponent } from './pages/dashboard/reports/customer/customer';
import { TaxComponent as ReportTaxComponent } from './pages/dashboard/reports/tax/tax';

// Users
import { ListComponent as UserListComponent } from './pages/dashboard/users/list/list';
import { RolesComponent } from './pages/dashboard/users/roles/roles';

// Settings
import { CompanyComponent } from './pages/dashboard/settings/company/company';
import { TaxComponent as SettingsTaxComponent } from './pages/dashboard/settings/tax/tax';
import { TemplatesComponent } from './pages/dashboard/settings/templates/templates';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },

      // Customers
      { path: 'customers/list', component: CustomerListComponent },
      { path: 'customers/new', component: CustomerNewComponent },
      { path: 'customers/debt', component: CustomerDebtComponent },

      // Products
      { path: 'products/list', component: ProductListComponent },
      { path: 'products/new', component: ProductNewComponent },
      { path: 'products/stock', component: ProductStockComponent },

      // Invoices
      { path: 'invoices/list', component: InvoiceListComponent },
      { path: 'invoices/new', component: InvoiceNewComponent },
      { path: 'invoices/earchive', component: EarchiveComponent },

      // Expenses
      { path: 'expenses/list', component: ExpenseListComponent },
      { path: 'expenses/new', component: ExpenseNewComponent },

      // Income
      { path: 'income/list', component: IncomeListComponent },
      { path: 'income/new', component: IncomeNewComponent },
      { path: 'income/categories', component: IncomeCategoriesComponent },

      // Bank
      { path: 'bank/cash', component: CashComponent },
      { path: 'bank/accounts', component: AccountsComponent },
      { path: 'bank/transfer', component: TransferComponent },

      // Reports
      { path: 'reports/daily', component: DailyComponent },
      { path: 'reports/customer', component: ReportCustomerComponent },
      { path: 'reports/tax', component: ReportTaxComponent },

      // Users
      { path: 'users/list', component: UserListComponent },
      { path: 'users/roles', component: RolesComponent },

      // Settings
      { path: 'settings/company', component: CompanyComponent },
      { path: 'settings/tax', component: SettingsTaxComponent },
      { path: 'settings/templates', component: TemplatesComponent },
    ]
  }
];

export const appRouter = provideRouter(routes);
