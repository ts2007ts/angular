import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TestComponent } from './test/test.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { DemoComponent } from './life-cycle-hook/demo/demo.component';
import { SetBackgroundDirective } from './Directives/set-background.directive';
import { HighlightDirective } from './Directives/highlight.directive';
import { HoverDirective } from './Directives/hover.directive';
import { DifferenceBetweenPropertyAndHostBindingComponent } from './difference-between-property-and-host-binding/difference-between-property-and-host-binding.component';
import { SampleDirective } from './Directives/sample.directive';
import { SortAlgorithmsComponent } from './sort-algorithms/sort-algorithms.component';
import { EightQueensProblemComponent } from './eight-queens-problem/eight-queens-problem.component';
import { KnightTourProblemComponent } from './knight-tour-problem/knight-tour-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    TopMenuComponent,
    ContainerComponent,
    SearchComponent,
    TopHeaderComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    ViewChildrenComponent,
    NgTemplateComponent,
    NgContainerComponent,
    FeaturedBrandsComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    LifeCycleHookComponent,
    DemoComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    DifferenceBetweenPropertyAndHostBindingComponent,
    SampleDirective,
    SortAlgorithmsComponent,
    EightQueensProblemComponent,
    KnightTourProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
