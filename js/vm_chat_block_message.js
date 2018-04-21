
	var chatBlockMessage = new Vue({
	  el: '#chat_block_message',
	  data: {
	  	chat_id: null,
	  	consumer: null,
	    messages: null,
	    text_message: ""
	  },
	  watch: {
	  	'messages': function () {
	  		// обновляем последнее сообщение этого диалога
	  		updateLastMessageForAll();
	  	},
	  	'chat_id': function () {
	  		console.log("selected chat " + this.chat_id);
	  		this.messages = getMessagesByChatId(this.chat_id);
	  		console.log("messages chat " + getMessagesByChatId(this.chat_id));
			this.consumer = getUserNameByChatId(this.chat_id);
			this.text_message = "";
	  	}
	  },
	  methods:{
		  	'send_message': function(message){
		  		alert(message);
		  	},
	  	  	'back': function(){
		  		this.consumer = null;
		  		this.chat_id = null;
		  		for (var i = 0; i < dialogs.dialogList.length; i++) {		
		  			dialogs.dialogList[i].isActive = false;
	  			}
		  	}

	  }

	});