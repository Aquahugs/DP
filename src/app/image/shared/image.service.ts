import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

	const IMAGES =[ //<!-- replace this with a callout to the database 
	{"id":1,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/1.jpg"},
	{"id":2,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/2.jpg"},
	{"id":3,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/3.jpg"},
	{"id":4,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/4.jpg"},
	{"id":5,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/5.jpg"},
	{"id":6,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/6.jpg"},
	{"id":7,"category": "boats", "caption": "view from a boat", "url": "assets/images/wall/7.jpg"}
	]	
