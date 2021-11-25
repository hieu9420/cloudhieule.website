const socket = io('http://localhost:3000')

const messages = $('body').find('#messages');
const message = $('body').find('#message');
const senderId = $('user-id').val();
const senderName = $('user-name').val();

socket.on('allChats', (data)=>{
    $.each(data, function(index, item){
        messages.append(`<div class="msg-bubble ml-2 mt-2">
        <div class="msg-info">
          <div class="msg-info-name">${item.senderName}</div>
          <div class="msg-info-time">${moment(new Date(item.createdAt)).format('DD/MM/YY hh:ss')}</div>
        </div>

        <div class="msg-text">
          ${item.message}
        </div>
      </div>
    </div>`);
    })
});


const handleSubmitNewMessage = () =>{
    let data = {
        message: message.val(),
        senderId: senderId,
        senderName: senderName,
    }
    socket.emit('chat', data);
    socket.on('chat');
}

socket.on('newChat', function(data){
    messages.append(`
    <div class="msg-bubble ml-2 mt-2">
        <div class="msg-info">
          <div class="msg-info-name">${data.senderName}</div>
          <div class="msg-info-time">${moment(new Date()).format('DD/MM/YY hh:ss')}</div>
        </div>

        <div class="msg-text">
          ${data.message}
        </div>
      </div>
    </div>`);
    message.val('');
})