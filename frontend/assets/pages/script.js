function dragStart(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log('event.target.id', event.target.id);
}