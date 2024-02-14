import data from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId){
   return data
   .filter((notification) => notification.author.id === userId)
   .map((notification) => notification.context)
}
