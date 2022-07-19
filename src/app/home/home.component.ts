import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScheduledAdsService } from '../Services/scheduled-ads.service';
import { filter, Subscription, map, timer, interval } from 'rxjs';
import { tap, retryWhen, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
  msg:string="";
  private  subscriptionList: Subscription[]=[];
  constructor( private schAds:ScheduledAdsService) {

   }

  ngOnInit(): void {
    // let adsSubscribtion=this.schAds.getScheduledAds(2).subscribe({
    //   next:(ad:string)=>{
    //     console.log(`New Ad: ${ad}`);
    //   },  
    //   error:(err)=>{
    //     console.log(`Error: ${err}`);
    //   },
    //   complete:()=>{
    //     console.log("Ads finished...")
    //   }
    // });
    let filteredObservable=this.schAds.getScheduledAds(2).pipe(
      filter((ad)=>ad.includes("50%")),
      map((ad)=>{ 
                if (ad=="")
              {
                throw ad;
              }
            return "Hot Offer!!! " + ad}),
            
            retryWhen(err=>err.pipe(
                tap(ad=>this.msg=` Contact Us to get your own PROMOCODE !!`)
            )),
            delayWhen(e=>interval(Math.random() * 1000))
    );
    console.log("Msg After subscribe...");
    
    let adsSubscribtion=filteredObservable.subscribe(
      {
          next:(ad:string)=>{
           this.msg=ad;
          },  
          error:(err)=>{
            console.log(`Error: ${err}`);
          },
          complete:()=>{
            console.log("Ads finished...")
          }
        }
    );
    this.subscriptionList.push(adsSubscribtion);

  }


  ngOnDestroy(): void {
    for (let subscription of this.subscriptionList)
    {
      subscription.unsubscribe();
    }
  }
}
