import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Group } from '../group.model';


@Injectable()
export class GroupService{

    private groups: any={};
    private group: any = {};
    private firebaseUrl: string;
    private fbRef: firebase;
    private groupRef: firebase;
    private clientRef: firebase;
    
    constructor(){
        var config = {
            apiKey: "AIzaSyAtpfsI2uBWtBU4FWFvABF_o7jehHygPWM",
            authDomain: "fir-mobile-application.firebaseapp.com",
            databaseURL: "https://fir-mobile-application.firebaseio.com",
            storageBucket: "fir-mobile-application.appspot.com",
            messagingSenderId: "957781761735"
        };

        firebase.initializeApp(config);

        this.fbRef = firebase;
        this.groupRef = this.fbRef.child('groups');
        this.group = {};
    }

    addGroup(newGroup:any): void{
        this.groupRef.push({
            name: newGroup.name
        });
        return;
    }

    getGroups(): Observable<Group>{
        return Observable.create(observer => {
            let listener = this.groupRef.on('child_added', snapshot =>{
                let data = snapshot.val();
                observer.next(new Group(
                    snapshot.key(),
                    data.name
                ));
            }, observer.error);
        });
    }

    deleteGroup(id){
        let delRef = new Firebase(this.firebaseUrl + 'groups/' + id);
        delRef.remove();
    }

    getGroup(id){
        let editRef = new Firebase(this.firebaseUrl + 'groups/' + id);
        var self = this;
        editRef.on("value", function(snapshot){
            self.group = {
                id: snapshot.key(),
                name: snapshot.val().name
            }
        });
        return self.group;
    }

    editGroup(newGroup): void{
        let updateref = new Firebase(this.firebaseUrl + 'groups/' + newGroup.id);
        updateref.update({
            name: newGroup.name
        });
        return;
    }
}