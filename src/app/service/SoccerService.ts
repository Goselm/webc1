<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,Teams } from "./ScheduleData";

@Injectable({
    providedIn:'root',
})

export class SoccerService{
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }

    getAllTeamsAsync(){
        return Promise.resolve(Teams);
    }

    getAllTeams(){
        return Teams;
    }

    private computeRankings(){

    }
=======
import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,Teams } from "./ScheduleData";

@Injectable({
    providedIn:'root',
})

export class SoccerService{
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }

    getAllTeamsAsync(){
        return Promise.resolve(Teams);
    }

    getAllTeams(){
        return Teams;
    }

    private computeRankings(){

    }
>>>>>>> 30e70cd678637c5b1a9c2b7902691fcfe3d44974
}