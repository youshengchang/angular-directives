import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from '../client.model';
import { Group } from '../../groups/group.model';

@Injectable()
export class ClientService{

    private clients;
    private client;
    private fireBaseUrl: string;
    private fbRef: Firebase;
    private groupRef: Firebase;
    private clientRef: Firebase;
    group="Web Design";
    

    constructor(){
       this.fireBaseUrl='';
       this.fbRef= new Firebase(this.fireBaseUrl);
       this.clientRef=this.fbRef.child('clients');
       this.client={};
       this.groupRef=this.fbRef.child('groups'); 
    }

    addClient(newClient): any{
        this.clientRef.push({
            firstName: newClient.firetName,
            lastName: newClient.lastName,
            group: this.group,
            email: newClient.email,
            phone: newClient.phone,
            address: newClient.address,
            city: newClient.city,
            state: newClient.state,
            zipcode: newClient.zipcode
        });
        return;
    }

    getClients(): Observable<Client>{
        return Observable.create(observer => {
            let listener = this.clientRef.on('client_added', snapshot => {
                let data = snapshot.val();
                observer.next(new Client(
                    snapshot.key(),
                    data.firstName,
                    data.lastName,
                    data.group,
                    data.email,
                    data.phone,
                    data.address,
                    data.city,
                    data.state,data.zipcode
                ));
            }, observer.error);
        });
    }

    getGroups(): Observable<Group>{
        return Observable.create(observer => {
            let listener = this.groupRef.on('child_added', snapshot=>{
                let data = snapshot.val();
                observer.next(new Group(
                    snapshot.key(),
                    data.name
                ));
            }, observer.error);
        });
    }

    getClient(id){
        let editRef = new Firebase(this.fireBaseUrl + 'clients/' + id);
        var self = this;
        editRef.on("value", function(snapshot){
            self.client = {
                id: snapshot.key(),
                firstName: snapshot.val().firstName,
                lastName: snapshot.val().lastName,
                group: snapshot.val().group,
                email: snapshot.val().email,
                phone: snapshot.val().phone,
                address: snapshot.val().address,
                city: snapshot.val().city,
                state: snapshot.val().state,
                zipcode: snapshot.val().zipcode
            }
        });
        return self.client;
    }

    deleteClient(id){
        let delRef = new Firebase(this.fireBaseUrl + 'clients/' + id);
        delRef.remove();
        console.log('Deleted client with ID = ' + id);
    }

    editClient(newClient): void{
        let updateRef = new Firebase(this.fireBaseUrl + 'clients/' + newClient.id);
        updateRef.update({
                firstName: newClient.firstName,
                lastName: newClient.lastName,
                group: newClient.group,
                email: newClient.email,
                phone: newClient.phone,
                address: newClient.address,
                city: newClient.city,
                state: newClient.state,
                zipcode: newClient.zipcode
        });
        return;
    }
}