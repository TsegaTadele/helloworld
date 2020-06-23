import { AdminAuthGuard } from './services/admin-auth-gaurd.service';
import { AuthGaurd } from './services/auth-gaurd.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { LoginComponent } from './login/login.component';
import { AppErrorHandler } from './common/app-error-handler';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PostComponent,
    LoginComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGaurd, AdminAuthGuard],
      },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      /* {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent,
      },
      {
        path: 'followers',
        component: GithubFollowersComponent,
      },
      {
        path: 'posts',
        component: PostComponent,
      },
      */
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
  ],
  providers: [
    PostService,
    OrderService,
    AuthService,
    AuthGaurd,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
