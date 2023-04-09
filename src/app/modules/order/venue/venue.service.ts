import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor() { }

  // venuedetails

venueDetails=[
  {
    id:1,
    venueName:"Auditorium",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:2000,
    venueImg:"https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2022-08/empty%20vintage%20moving%20theater%20venue%20type.webp?h=119335f7&itok=DWdNIUDj"
  },{
    id:2,
    venueName:"Convention centres",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:4000,
    venueImg:"http://populous.com/wp-content/uploads/2012/02/PhoenixConventionCenter-Phoenix-ExteriorDusk.jpg"
  },{
    id:3,
    venueName:"Conference centres",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:5000,
    venueImg:"https://universe.byu.edu/wp-content/uploads/2013/09/conference_center_sunpm_april11.jpg"
  },{
    id:4,
    venueName:"Hotels",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:15000,
    venueImg:"https://cdn.galaxy.tf/thumb/sizeW1920/uploads/2s/cms_image/001/564/144/1564144289_5d3af2a1a8408-thumb.jpg"
  },{
    id:5,
    venueName:"Resorts",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:10000,
    venueImg:"https://www.traveller.com.au/content/dam/images/g/t/4/a/u/z/image.related.articleLeadwide.520x294.gt49y7.png/1481357875798.jpg"
  },{
    id:6,
    venueName:"Breweries and wineries",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:8000,
    venueImg:"https://i.pinimg.com/originals/43/cf/a9/43cfa9daf3a7000fc0a12e9081caac11.jpg"
  },{
    id:7,
    venueName:" Community centres",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:7000,
    venueImg:"https://www.brampton.ca/EN/residents/Recreation/Community-Centres/PublishingImages/centre-banners/banner-bsc.jpg"
  },{
    id:8,
    venueName:"Museums",
    venueDetails:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore deserunt consectetur dolore quisquam earum quod sequi quo tenetur itaque.",
    venuePrice:3000,
    venueImg:"https://s3.amazonaws.com/media.harvardartmuseums.org/production/uploaded_files/tour_builder/o_1cab9uoiq1snq7q6rtb1cp41pnl15.jpg?height=675"
  }
]
}
