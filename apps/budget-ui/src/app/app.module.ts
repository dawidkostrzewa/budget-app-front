import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppMaterialModule } from './app-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { YearSummaryPageComponent } from './year-summary-page/year-summary-page.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CategoryTransactionsComponent } from './home-page/category-transactions/category-transactions.component';
import {
  budgetReducer,
  BUDGET_FEATURE,
} from '../../../../libs/budget-ui/data-access/src/lib/budget/budget.reducer';
import { PricePipe } from './shared/pricePipe/price.pipe';
import { MonthToNamePipe } from './shared/monthToNamePipe/month-to-name.pipe';
import { BudgetEffects } from '../../../../libs/budget-ui/data-access/src/lib/budget/budget.effect';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { TableContentLoaderComponent } from './shared/table-content-loader/table-content-loader.component';
import { BudgetUiDataAccessModule } from '@budgetapp/budget-ui/data-access';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SidebarComponent,
    YearSummaryPageComponent,
    CategoryTransactionsComponent,
    PricePipe,
    MonthToNamePipe,
    TableContentLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ContentLoaderModule,
    BudgetUiDataAccessModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'BudgetApp',
      logOnly: environment.production,
    }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}