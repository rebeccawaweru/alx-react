import data from '../../../../notifications.json';
import {normalize, schema} from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages",{}, { idAttributes:'guid'});
const notification = new schema.Entity("notifications",{
    author:user,
    context:message
});

const normalized = normalize(data, [notification])

export default function getAllNotificationsByUser(userId){
   return data
   .filter((notification) => notification.author.id === userId)
   .map((notification) => notification.context)
}
