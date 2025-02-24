import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from "./product-card/product-card/product-card.component";

@Component({
  selector: 'app-content',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  CourseButton=['Developer','UI/UX','Science','Security','Testing']

 courseList=[
  {courseId:1,rating:4,seat:2,courseName:'Python',course:'Developer',price:999,imageUrl:'c_card/python_img.jpg'},
  {courseId:2,rating:5,seat:2,courseName:'Frontend',course:'Developer',price:1099,imageUrl:'c_card/frontend_img.jpg'},
  {courseId:3,rating:3,seat:0,courseName:'Java',course:'Developer',price:799,imageUrl:'c_card/java_img.jpg'},
  {courseId:4,rating:1,seat:2,courseName:'.Net',course:'Developer',price:855,imageUrl:'c_card/net_img.png'},
  {courseId:5,rating:3,seat:2,courseName:'C++',course:'Developer',price:499,imageUrl:'c_card/c++_img.webp'},
  {courseId:6,rating:3,seat:0,courseName:'JavaScript',course:'Developer',price:1299,imageUrl:'c_card/javascript_img.png'},
  
  {courseId:7,rating:2,seat:2,courseName:'HTML & CSS',course:'UI/UX',price:699,imageUrl:'c_card/h-c_img.jpg'},
  {courseId:8,rating:3,seat:0,courseName:'User Testing',course:'UI/UX',price:1099,imageUrl:'c_card/user_test_img.webp'},
  {courseId:9,rating:4,seat:2,courseName:'Wireframing',course:'UI/UX',price:501,imageUrl:'c_card/wirefram_img.webp'},
  
  {courseId:10,rating:5,seat:2,courseName:'Data Science',course:'Science',price:3099,imageUrl:'c_card/data_science_img.jpg'},
  {courseId:11,rating:3,seat:0,courseName:'Deep Learning',course:'Science',price:2199,imageUrl:'c_card/deep_learn_ing.jpg'},
  {courseId:12,rating:3,seat:2,courseName:'AI & ML',course:'Science',price:999,imageUrl:'c_card/ai-ml-img.png'},
  {courseId:13,rating:2,seat:2,courseName:'NLP',course:'Science',price:788,imageUrl:'c_card/nlp_img.png'},
  {courseId:14,rating:1,seat:2,courseName:'R Language',course:'Science',price:99,imageUrl:'c_card/r_language_img.jpg'},
  {courseId:15,rating:4,seat:0,courseName:'Machine Learning',course:'Science',price:1099,imageUrl:'c_card/mach_learn_img.jpg'},

  {courseId:16,rating:2,seat:2,courseName:'Cyber Security',course:'Security',price:999,imageUrl:'c_card/cyp_img.jpg'},
  {courseId:17,rating:3,seat:2,courseName:'Black Chain',course:'Security',price:1099,imageUrl:'c_card/blackchain_img.jpg'},
 
  {courseId:18,rating:5,seat:2,courseName:'Tester',course:'Testing',price:599,imageUrl:'c_card/tester_img.jpg'}

 ]

  filterCourse: any[] =[];
  selectCourse:string='';
 
 constructor(){
  this.filterCourse=this.courseList;
 }

 filterCategory(item:string){
  if(this.selectCourse==item){
    this.selectCourse='';
    this.filterCourse=this.courseList;
  }else{
    this.selectCourse=item
    const products=this.courseList.filter(e => e.course == item);
    this.filterCourse = products;
    console.log('ptrocess')
  }
  

 }

}
