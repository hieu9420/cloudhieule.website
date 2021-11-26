let file;

$('.custom-file-input').on('change', function(e){
    file = $(e.target)[0].files[0];
    $(this).parent().find('.custom-file-label').text(file.name)
});

let submitForm = async function() {
    console.log(file);
    let formData = new FormData();
    formData.append('photo', file, file.name);
    try {
      const response = await fetch('http://localhost:3000/photos/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      $('#openUploadAvatar').modal('hide');
      setTimeout(() => {
        window.location.reload();
      }, 500);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
}