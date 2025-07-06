import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit {
  activeMenu: string | null = null;

  constructor(public router: Router) {}

  ngOnInit(): void {
    // İlk yüklemede aktif menüyü belirle
    this.setActiveMenuBasedOnUrl(this.router.url);

    // URL değişimlerini dinle
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveMenuBasedOnUrl(event.urlAfterRedirects);
      });
  }

  toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  setActiveMenuBasedOnUrl(url: string) {
    if (url.includes('/dashboard/customers')) {
      this.activeMenu = 'customer';
    } else if (url.includes('/dashboard/products')) {
      this.activeMenu = 'product';
    } else if (url.includes('/dashboard/invoices')) {
      this.activeMenu = 'invoice';
    } else if (url.includes('/dashboard/expenses')) {
      this.activeMenu = 'expense';
    } else if (url.includes('/dashboard/income')) {
      this.activeMenu = 'income';
    } else if (url.includes('/dashboard/bank')) {
      this.activeMenu = 'bank';
    } else if (url.includes('/dashboard/reports')) {
      this.activeMenu = 'reports';
    } else if (url.includes('/dashboard/users')) {
      this.activeMenu = 'users';
    } else if (url.includes('/dashboard/settings')) {
      this.activeMenu = 'settings';
    } else if (url.includes('/dashboard/home')) {
      this.activeMenu = 'dashboard';
    } else {
      this.activeMenu = null;
    }
  }
}
