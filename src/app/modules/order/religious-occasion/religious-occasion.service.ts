import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReligiousOccasionService {

  constructor() { }


// occasiondetails

religiousDetails=[
  {
    id:1,
    religiousName:"Diwali",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:7000,
    religiousImg:"https://d.ibtimes.co.uk/en/full/1405888/diwali-lights.jpg?w=736"
  },
  {
    id:2,
    religiousName:"Holi",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:2000,
    religiousImg:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/02/10/holi-10.jpg"
  },
  {
    id:3,
    religiousName:"Navratri",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:8000,
    religiousImg:"https://static-blog.treebo.com/wp-content/uploads/2018/02/durga_pooja.jpg"
  },
  {
    id:4,
    religiousName:"Janmashtami",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:1500,
    religiousImg:"https://images.thequint.com/thequint/2019-08/0cd98176-0ce9-4440-8e6c-2d0751813cc2/iStock_584207294.jpg?rect=0%2C0%2C3610%2C2031&auto=format%2Ccompress&fmt=webp"
  },
  {
    id:5,
    religiousName:"Ganesh Chaturthi",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:4000,
    religiousImg:"https://blog.kesari.in/wp-content/uploads/2017/08/Kesari-Tours-GaneshUtsav.3.jpg"
  },{
    id:6,
    religiousName:"Makar Sankranti & Pongal",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:3500,
    religiousImg:"https://www.holidify.com/blog/wp-content/uploads/2014/09/357679027_0e38eee575_o.jpg"
  },{
    id:7,
    religiousName:"Easter",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:2200,
    religiousImg:"https://www.holidify.com/blog/wp-content/uploads/2014/09/130372824_4fad36ebc4_z.jpg"
  },{
    id:8,
    religiousName:" Maha Shivratri",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:3200,
    religiousImg:"https://images.indianexpress.com/2022/02/maha-shivratri_1200.jpg"
  },{
    id:9,
    religiousName:"Buddha Purnima",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:1200,
    religiousImg:"https://www.holidify.com/blog/wp-content/uploads/2014/09/3524881247_0dafc6c75c_z.jpg"
  },{
    id:10,
    religiousName:"Losar Festival",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:2100,
    religiousImg:"https://www.holidify.com/blog/wp-content/uploads/2014/09/4408504716_d3513dbcbb_z.jpg"
  },{
    id:11,
    religiousName:"Christmas",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:5200,
    religiousImg:"https://static-blog.treebo.com/wp-content/uploads/2018/02/christmas.jpg"
  },{
    id:12,
    religiousName:"Baishakhi",
    religiousDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    religiousPrice:4200,
    religiousImg:"https://static-blog.treebo.com/wp-content/uploads/2018/02/happy_baisakhi_2018__bDmYu.jpg"
  }


]
}
