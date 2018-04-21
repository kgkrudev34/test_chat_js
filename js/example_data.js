
var userList = [
	{'id': 100, 'username': 'Иванов Иван'},
	{'id': 200, 'username': 'Семенов Семен'},
]

var newConsumers = [
	{
		'user': 400,
		'username': "Сергеев Сергей"
	},
	{
		'user': 300,
		'username': "Петров Петр"
	}
]

/* Список диалогов с последним сообщением
id - id чата
user_id - id собеседника
isActive - флаг для отображения диалогакак выбранного
*/
var dialogListArray = [
	{	
		'id': 4000,
		'user_id': 100,
		'last_message': 'Привет, это последнее сообщение',
		'isActive': false
	},
	{	
		'id': 2000,
		'user_id': 200,
		'last_message': 'Привет, это последнее сообщение',
		'isActive': false
	}
]

// чтобы добавить новое сообщение в определенный чат нужно добавить сообщение в этот диалог
// messageArray[1].messages.push({'text': 'Чат 4000', 'sender': 200});
var messageArray = [
						{'chat_id': 4000,
						'messages': [
							{'text': 'Чат 4000', 'sender': 100},
							{'text': 'Чат 4000', 'sender': 200}
							]
						},
						{'chat_id': 2000,
						'messages': [
							{'text': 'Чат 2000', 'sender': 100},
							{'text': 'Чат 2000', 'sender': 200}
							]
						}

						]

