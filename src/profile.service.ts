import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom} from 'rxjs';

@Injectable()
export class ProfileService {
  constructor(private httpService: HttpService) {}

  async profileEndPoint() {
    const catApi = 'https://catfact.ninja/fact'

    let catFact = 'Cat Fact not fetched'
    try{
      const response = await firstValueFrom(this.httpService.get(catApi, {timeout: 5000}));
      if(response.data && response.data.fact){
        catFact = response.data.fact
      }
    } catch (error) {
      console.log('Error Occured in fetching cat Fact:', error.message);
    }


    return {
      "status": "success",
      "user": {
        "email": "oluwakemikuteyi1505@gmail.com",
        "name": "Kuteyi Oluwakemi Joy",
        "stack": "Node.js/Express/NestJs"
      },
      "timestamp": new Date().toISOString(),
      "fact": catFact
    }
  }
}
