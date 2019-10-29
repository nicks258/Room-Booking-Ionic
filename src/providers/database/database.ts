import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'meeting.db',
        location: 'default'
      }).catch(error=>{
        alert(error);
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }

  fillDatabase() {
    this.http.get('assets/sample.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }

  addQuestions(Event_ID,PARTICIPANTS_ID,QUESTION_ID,QUESTIONS,OPTIONS,QUESTION_TYPE) {
    let sum :number = PARTICIPANTS_ID + QUESTION_ID;
    let data = [Event_ID,PARTICIPANTS_ID,QUESTION_ID,QUESTIONS,OPTIONS,QUESTION_TYPE,sum];
    return this.database.executeSql("INSERT INTO QUESTION_TABLE_REAL (Event_ID,PARTICIPANTS_ID,QUESTION_ID,QUESTIONS,OPTIONS,QUESTION_TYPE,QUESTION_ID_CONSTRAINT) VALUES (?, ? , ?, ?, ? , ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  addResponse(Event_ID,PARTICIPANTS_ID,QUESTION_ID,RESPONSE) {
    // let sum :number = PARTICIPANTS_ID + QUESTION_ID;
    let data = [Event_ID,PARTICIPANTS_ID,QUESTION_ID,RESPONSE];
    return this.database.executeSql("INSERT INTO RESPONSE_TABLE (Event_ID,PARTICIPANTS_ID,QUESTION_ID,RESPONSE) VALUES (?, ? , ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  addMeeting(TIMEDATA,COPART_NAME) {
    let data = [TIMEDATA,COPART_NAME];
    return this.database.executeSql("INSERT INTO MEETING_TABLE_REAL (TIMEDATA,COPART_NAME) VALUES (?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  addCoParts(coparts_id,coparts_name) {
    let data = [coparts_id,coparts_name];
    return this.database.executeSql("INSERT INTO meeting_table (coparts_id,coparts_name) VALUES (?,?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err.toString());
      return err;
    });
  }

  addParticipants(Event_ID,PARTICIPANTS_ID,MEMBER_ID,PARTICIPANTS_NAME,PARTICIPANTS_TYPE) {
    // let participantId:number = PARTICIPANTS_ID;
    // let eventId:number = Event_ID;
    let sum:number = Event_ID + PARTICIPANTS_ID + MEMBER_ID;
    let data = [Event_ID,PARTICIPANTS_ID,MEMBER_ID,PARTICIPANTS_NAME,PARTICIPANTS_TYPE,sum];
    return this.database.executeSql("INSERT INTO PARTICIPANTS_TABLE (Event_ID,PARTICIPANTS_ID,MEMBER_ID,PARTICIPANTS_NAME,PARTICIPANTS_TYPE,PARTICIPANTS_ID_CONSTRAINT) VALUES (?,?, ?, ?, ?, ? )", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  updateLocation(location) {
    let data = [location];
    return this.database.executeSql('UPDATE location SET location = ? WHERE id = ?',[location,1]).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }



  getAllEvents() {
    return this.database.executeSql("SELECT * FROM EVENTS_TABLE_NEW", []).then((data) => {
      let developers = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          developers.push({
            Event_ID: data.rows.item(i).Event_ID,
            EVENT_NAME: data.rows.item(i).EVENT_NAME,
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getParticipants(eventId) {
    return this.database.executeSql("SELECT * FROM PARTICIPANTS_TABLE WHERE EVENT_ID = ? AND PARTICIPANTS_TYPE = 'Individual'", [eventId]).then((data) => {
      let developers = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          developers.push({
            Event_ID: data.rows.item(i).Event_ID,
            PARTICIPANTS_ID: data.rows.item(i).PARTICIPANTS_ID,
            PARTICIPANTS_NAME: data.rows.item(i).PARTICIPANTS_NAME,
            PARTICIPANTS_TYPE: data.rows.item(i).PARTICIPANTS_TYPE,
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getParticipantsCoparts(eventId) {
    return this.database.executeSql("SELECT * FROM PARTICIPANTS_TABLE WHERE EVENT_ID = ? AND PARTICIPANTS_TYPE = 'Group'", [eventId]).then((data) => {
      let developers = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          developers.push({
            Event_ID: data.rows.item(i).Event_ID,
            PARTICIPANTS_ID: data.rows.item(i).PARTICIPANTS_ID,
            MEMBER_ID: data.rows.item(i).MEMBER_ID,
            PARTICIPANTS_NAME: data.rows.item(i).PARTICIPANTS_NAME,
            PARTICIPANTS_TYPE: data.rows.item(i).PARTICIPANTS_TYPE,
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }


  getEventId(eventName) {
    return this.database.executeSql("SELECT * FROM EVENTS_TABLE_NEW WHERE EVENT_NAME = ?", [eventName]).then((data) => {
      let developers = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          developers.push({
            Event_ID: data.rows.item(i).Event_ID,
            IS_COPARTS: data.rows.item(i).IS_COPARTS,
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }


  getAllCoParts() {
    return this.database.executeSql("SELECT * FROM meeting_table ", []).then((data) => {
      let developers = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          developers.push({
            coparts_id: data.rows.item(i).coparts_id,
            coparts_name: data.rows.item(i).coparts_name,
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getAllQuestionsForCoparts(participantId,eventId) {
    return this.database.executeSql("SELECT * FROM QUESTION_TABLE_REAL WHERE PARTICIPANTS_ID = ? AND Event_ID = ?", [participantId,eventId]).then((data) => {
      let developers = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          developers.push({
            Event_ID: data.rows.item(i).Event_ID,
            PARTICIPANTS_ID: data.rows.item(i).PARTICIPANTS_ID,
            QUESTION_ID: data.rows.item(i).QUESTION_ID,
            QUESTIONS: data.rows.item(i).QUESTIONS,
            OPTIONS: data.rows.item(i).OPTIONS,
            QUESTION_TYPE: data.rows.item(i).QUESTION_TYPE,
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  // getLocation() {
  //   let location;
  //   return this.database.executeSql("SELECT * FROM location", []).then((data) => {
  //     let developers = [];
  //     if (data.rows.length > 0) {
  //       location = data.rows.item(0).location
  //       // for (var i = 0; i < data.rows.length; i++) {
  //       //   developers.push({
  //       //     location: data.rows.item(i).location,
  //       //   });
  //       // }
  //     }
  //     return location;
  //   }, err => {
  //     console.log('Error: ', err);
  //     return [];
  //   });
  // }



  // getAllUnSync() {
  //   return this.database.executeSql("SELECT * FROM people WHERE sync=1", []).then((data) => {
  //     let developers = [];
  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         developers.push({
  //           firstname: data.rows.item(i).firstname,
  //           lastname: data.rows.item(i).lastname,
  //           phonenumber: data.rows.item(i).phonenumber,
  //           email: data.rows.item(i).email
  //         });
  //       }
  //     }
  //     return developers;
  //   }, err => {
  //     console.log('Error: ', err);
  //     return [];
  //   });
  // }

  getAllResponse(){
    return this.database.executeSql("SELECT * FROM RESPONSE_TABLE ", []).then((data) => {
      let developers = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          developers.push({
            Event_ID: data.rows.item(i).Event_ID,
            PARTICIPANTS_ID: data.rows.item(i).PARTICIPANTS_ID,
            QUESTION_ID: data.rows.item(i).QUESTION_ID,
            RESPONSE: data.rows.item(i).RESPONSE
          });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  deleteEventData(){
    return this.database.executeSql("DELETE FROM EVENTS_TABLE_NEW ",[]).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  deleteQuestionData(){
    return this.database.executeSql("DELETE FROM QUESTION_TABLE_REAL ",[]).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  deleteAppData(){
    return this.database.executeSql("DELETE FROM meeting_table ",[]).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  deleteResponseData(){
    return this.database.executeSql("DELETE FROM RESPONSE_TABLE ",[]).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}
