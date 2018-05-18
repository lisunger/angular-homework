import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AppRoutingModule } from './/app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ListPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    MatInputModule,
    MatSelectModule,
    MatButtonModule,

    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
