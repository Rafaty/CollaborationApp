import Employee from '../models/Employee'
import Realm from 'realm';

export default function getDbConnection(){
    return Realm.open({schema: [Employee]});
}
    


