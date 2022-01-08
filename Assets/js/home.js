console.log("connected")
document.getElementById('Upload').addEventListener('click',function(event){
    console.log("hello");
        event.preventDefault();
        let len=$('#file').val();
        if(len.substring(len.length-3,len.length).toLowerCase()=='csv'){
            document.getElementsByTagName('form')[0].submit();
        }else{
            alert('plz upload Csv File Only')
        }
    
})
