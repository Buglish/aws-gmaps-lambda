import { Component, OnInit } from '@angular/core';

declare const google: any;
declare let pins: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  ngOnInit() {
    this.initMap();
  }

  async initMap(): Promise<void> {
    let pins= Object.values([]);
    const curLatlng = { lat: -43.528, lng: 172.601 };
    const map = new google.maps.Map(document.getElementById("map"), {         
        center: curLatlng,
        zoom: 12,
      }
    );

  
    map.addListener("click", (mapsMouseEvent) => {
  
      console.log( mapsMouseEvent.latLng);
        const marker = new google.maps.Marker({
          position: mapsMouseEvent.latLng,
          map,
          title: JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
        });
        //pins[pins.length] = mapsMouseEvent.latLng; //add object later in order to calculate distance
        pins[pins.length] = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);

        console.log("--S--" );
        for(var i=0;i<pins.length;i++){

          console.log(pins[i] );

        }
        console.log("--E--" );
    });
    
  }


}

