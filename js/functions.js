// Получение имени и фамилии собеседника по чату
function getUserNameByChatId(id) {
	for (var i=0; i<dialogListArray.length; i++) {
		if(dialogListArray[i].id == id){
			for(var k=0; k<userList.length; k++){
				if(dialogListArray[i].user_id == userList[k].id){
					return userList[k].username;
				}
			}
		}
	}
}

//Получение имени и фамилии по id пользователя
function getUserNameByUserId(id) {
	for(var k=0; k<userList.length; k++){
		if(userList[k].id == id){
			return userList[k].username;
		}
	}
}

// Получение сообщений по id чата
function getMessagesByChatId(chat_id){
	for (var i = 0; i < messageArray.length; i++) {
		if(messageArray[i].chat_id == chat_id){
			return messageArray[i].messages;
		}
	}
}

// Делает все сообщения неактивными для очистки выделения
function allDialogUnactive(obj){
	for (var i = 0; i < obj.dialogList.length; i++) {		
		obj.dialogList[i].isActive = false;
	}
}

/* Обновляет все последние сообщения в списке диалогов
	Рекомендуется вызывать при записи нового сообщения в массив messageArray
*/
function updateLastMessageForAll(){
	for (var i = 0; i < dialogListArray.length; i++) {
		for (var k = 0; k < messageArray.length; k++) {
			if(dialogListArray[i].id==messageArray[k].chat_id){
				dialogListArray[i].last_message = messageArray[k].messages[messageArray[k].messages.length-1].text;
			}
		}
	}
}

// Замена id пользователя на его ФИО в сообщениях
function converterUsername(){
	for (var i = 0; i < messageArray.length; i++) {
		for (var m = 0; m < messageArray[i].messages.length; m++) {
			for (var k = 0; k < userList.length; k++) {
				if(messageArray[i].messages[m].sender==userList[k].id){
					messageArray[i].messages[m].sender = userList[k].username;
				}
			}
		}
	}
}