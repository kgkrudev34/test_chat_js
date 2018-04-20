$(document).ready(function () {

	var app = new Vue({
	  el: '#chat_block_dialogs',
	  data: {
	    dialogList: dialogListArray
	  }
	});

	var chatBlockMessage= new Vue({
	  el: '#chat_block_message',
	  data: {
	    messages: messageArray
	  },
	  watch: {
	  	'messages': function () {
	  		var objDiv = document.getElementById("message_content");
			objDiv.scrollTop = objDiv.scrollHeight;
	  		//console.log('messages was updated ' + document.querySelector('#chat_block_message').scrollHeight);
	  	}
	  }
	});
	
});