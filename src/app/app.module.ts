import { InjectionToken, NgModule } from '@angular/core';
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
import { WordBreakProblemComponent } from './word-break-problem/word-break-problem.component';
import { RemoveInvalidParenthesesComponent } from './remove-invalid-parentheses/remove-invalid-parentheses.component';
import { MatchAPatternAndStringWithoutUsingRegularExpressionsComponent } from './match-apattern-and-string-without-using-regular-expressions/match-apattern-and-string-without-using-regular-expressions.component';
import { DisableProductDirective } from './Directives/disable-product.directive';
import { CustomClassAndStyleComponent } from './custom-class-and-style/custom-class-and-style.component';
import { CustomClassDirective } from './Directives/custom-class.directive';
import { CustomStyleDirective } from './Directives/custom-style.directive';
import { CustomStructuralDirectiveComponent } from './custom-structural-directive/custom-structural-directive.component';
import { CustomIfDirective } from './Directives/custom-if.directive';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { Comp1Component } from './view-encapsulation/comp1/comp1.component';
import { Comp2Component } from './view-encapsulation/comp2/comp2.component';
import { AngularServicesAndDependencyInjectionComponent } from './angular-services-and-dependency-injection/angular-services-and-dependency-injection.component';
import { HomeComponent } from './angular-services-and-dependency-injection/header/home/home.component';
import { AdminComponent } from './angular-services-and-dependency-injection/header/admin/admin.component';
import { HeroComponent } from './angular-services-and-dependency-injection/header/home/hero/hero.component';
import { SidebarComponent } from './angular-services-and-dependency-injection/header/home/sidebar/sidebar.component';
import { UserDetailComponent } from './angular-services-and-dependency-injection/header/admin/user-detail/user-detail.component';
import { UserListComponent } from './angular-services-and-dependency-injection/header/admin/user-list/user-list.component';
import { ServiceHeaderComponent } from './angular-services-and-dependency-injection/header/header.component';
import { UserService } from './angular-services-and-dependency-injection/Services/user.service';
import { ObservablesAndRxJSComponent } from './observables-and-rx-js/observables-and-rx-js.component';
import { NewTaskComponent } from './observables-and-rx-js/new-task/new-task.component';
import { ShowTaskComponent } from './observables-and-rx-js/show-task/show-task.component';
import { SubjectComponent } from './observables-and-rx-js/subject/subject.component';
import { PromiseVsObservableComponent } from './observables-and-rx-js/promise-vs-observable/promise-vs-observable.component';
import { UnsubscribeComponent } from './observables-and-rx-js/unsubscribe/unsubscribe.component';

//export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE')

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
    KnightTourProblemComponent,
    WordBreakProblemComponent,
    RemoveInvalidParenthesesComponent,
    MatchAPatternAndStringWithoutUsingRegularExpressionsComponent,
    DisableProductDirective,
    CustomClassAndStyleComponent,
    CustomClassDirective,
    CustomStyleDirective,
    CustomStructuralDirectiveComponent,
    CustomIfDirective,
    SwitchDirectiveComponent,
    ViewEncapsulationComponent,
    Comp1Component,
    Comp2Component,
    AngularServicesAndDependencyInjectionComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserDetailComponent,
    UserListComponent,
    ServiceHeaderComponent,
    ObservablesAndRxJSComponent,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    PromiseVsObservableComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //providers: [{provide: USER_TOKEN, useClass: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
