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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ObservablesAndRxJSComponent } from './observables-and-rx-js/observables-and-rx-js.component';
import { NewTaskComponent } from './observables-and-rx-js/new-task/new-task.component';
import { ShowTaskComponent } from './observables-and-rx-js/show-task/show-task.component';
import { SubjectComponent } from './observables-and-rx-js/subject/subject.component';
import { PromiseVsObservableComponent } from './observables-and-rx-js/promise-vs-observable/promise-vs-observable.component';
import { UnsubscribeComponent } from './observables-and-rx-js/unsubscribe/unsubscribe.component';
import { AngularDynamicComponentsComponent } from './angular-dynamic-components/angular-dynamic-components.component';
import { UsersComponent } from './angular-dynamic-components/users/users.component';
import { ConfirmDeleteComponent } from './angular-dynamic-components/users/confirm-delete/confirm-delete.component';
import { HomeDynamicComponentComponent } from './angular-dynamic-components/home-dynamic-component/home-dynamic-component.component';
import { ViewContainerDirective } from './angular-dynamic-components/Directives/view-container.directive';
import { AngularRouterAndRouteGuardsComponent } from './angular-router-and-route-guards/angular-router-and-route-guards.component';
import { AboutRouterComponent } from './angular-router-and-route-guards/about-router/about-router.component';
import { CheckoutRouterComponent } from './angular-router-and-route-guards/checkout-router/checkout-router.component';
import { ContactRouterComponent } from './angular-router-and-route-guards/contact-router/contact-router.component';
import { CoursesRouterComponent } from './angular-router-and-route-guards/courses-router/courses-router.component';
import { FooterRouterComponent } from './angular-router-and-route-guards/footer-router/footer-router.component';
import { HeaderRouterComponent } from './angular-router-and-route-guards/header-router/header-router.component';
import { HomeRouterComponent } from './angular-router-and-route-guards/home-router/home-router.component';
import { LoginRouterComponent } from './angular-router-and-route-guards/login-router/login-router.component';
import { NotFoundRouterComponent } from './angular-router-and-route-guards/not-found-router/not-found-router.component';
import { CourseDetailComponent } from './angular-router-and-route-guards/courses-router/course-detail/course-detail.component';
import { BannerComponent } from './angular-router-and-route-guards/home-router/banner/banner.component';
import { ContactUsComponent } from './angular-router-and-route-guards/home-router/contact-us/contact-us.component';
import { PopularComponent } from './angular-router-and-route-guards/home-router/popular/popular.component';
import { ServicesComponent } from './angular-router-and-route-guards/home-router/services/services.component';
import { TestimonyComponent } from './angular-router-and-route-guards/home-router/testimony/testimony.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AdminPipesComponent } from './angular-pipes/admin-pipes/admin-pipes.component';
import { PercentagePipe } from './angular-pipes/Pipes/percentage.pipe';
import { FilterPipe } from './angular-pipes/Pipes/filter.pipe';
import { AngularTemplateDrivenFormComponent } from './angular-template-driven-form/angular-template-driven-form.component';
import { AngularReactiveFormComponent } from './angular-reactive-form/angular-reactive-form.component';
import { AngularHttpClientComponent } from './angular-http-client/angular-http-client.component';
import { DashboardHttpClientComponent } from './angular-http-client/dashboard-http-client/dashboard-http-client.component';
import { FooterHttpClientComponent } from './angular-http-client/footer-http-client/footer-http-client.component';
import { HeaderHttpClientComponent } from './angular-http-client/header-http-client/header-http-client.component';
import { CreateTaskHttpClientComponent } from './angular-http-client/dashboard-http-client/create-task-http-client/create-task-http-client.component';
import { TaskDetailsHttpClientComponent } from './angular-http-client/dashboard-http-client/task-details-http-client/task-details-http-client.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './angular-http-client/Services/auth-interceptor.service';
import { LoggingInterceptorService } from './angular-http-client/Services/logging-interceptor.service';
import { AngularAuthenticationComponent } from './angular-authentication/angular-authentication.component';
import { DashboardAuthenticationComponent } from './angular-authentication/dashboard-authentication/dashboard-authentication.component';
import { FooterAuthenticationComponent } from './angular-authentication/footer-authentication/footer-authentication.component';
import { HeaderAuthenticationComponent } from './angular-authentication/header-authentication/header-authentication.component';
import { HomeAuthenticationComponent } from './angular-authentication/home-authentication/home-authentication.component';
import { LoginAuthenticationComponent } from './angular-authentication/login-authentication/login-authentication.component';
import { CreateTaskAuthenticationComponent } from './angular-authentication/dashboard-authentication/create-task-authentication/create-task-authentication.component';
import { TaskDetailsAuthenticationComponent } from './angular-authentication/dashboard-authentication/task-details-authentication/task-details-authentication.component';
import { AuthInterceptorAuthenticationService } from './angular-authentication/Services/auth-interceptor-authentication.service';
import { LoggingInterceptorAuthenticationService } from './angular-authentication/Services/logging-interceptor-authentication.service';
import { LoaderComponent } from './angular-authentication/Utility/loader/loader.component';
import { SnackbarComponent } from './angular-authentication/Utility/snackbar/snackbar.component';

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
    UnsubscribeComponent,
    AngularDynamicComponentsComponent,
    UsersComponent,
    ConfirmDeleteComponent,
    HomeDynamicComponentComponent,
    ViewContainerDirective,
    AngularRouterAndRouteGuardsComponent,
    AboutRouterComponent,
    CheckoutRouterComponent,
    ContactRouterComponent,
    CoursesRouterComponent,
    FooterRouterComponent,
    HeaderRouterComponent,
    HomeRouterComponent,
    LoginRouterComponent,
    NotFoundRouterComponent,
    CourseDetailComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServicesComponent,
    TestimonyComponent,
    AngularPipesComponent,
    AdminPipesComponent,
    PercentagePipe,
    FilterPipe,
    AngularTemplateDrivenFormComponent,
    AngularReactiveFormComponent,
    AngularHttpClientComponent,
    DashboardHttpClientComponent,
    FooterHttpClientComponent,
    HeaderHttpClientComponent,
    CreateTaskHttpClientComponent,
    TaskDetailsHttpClientComponent,
    AngularAuthenticationComponent,
    DashboardAuthenticationComponent,
    FooterAuthenticationComponent,
    HeaderAuthenticationComponent,
    HomeAuthenticationComponent,
    LoginAuthenticationComponent,
    CreateTaskAuthenticationComponent,
    TaskDetailsAuthenticationComponent,
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorAuthenticationService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorAuthenticationService, multi: true }
  ],
  //providers: [{provide: USER_TOKEN, useClass: UserService}],
  bootstrap: [AppComponent],
})
export class AppModule { }
