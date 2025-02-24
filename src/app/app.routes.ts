import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './home/form/form/form.component';


export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},    
    {path:'content',component:ContentComponent},
    {path:'page',component:PageComponent},
    {path:'contact',component:ContactComponent},
    {path:'home/form',component:FormComponent}

];
