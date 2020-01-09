export function handleImage(event) {
  const formData = new FormData();
  const createDate = Date.now();
  const xhr = new XMLHttpRequest();
  const url = `https://api.cloudinary.com/v1_1/befamily/upload`;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  formData.append('upload_preset', 'nd1vsnsz');
  formData.append('file', event.target.files[0], createDate);
  formData.append('name', createDate);
  formData.append('public_id,', createDate);
  console.log(createDate);
  xhr.send(formData);
  xhr.onreadystatechange = function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      var url = response.secure_url;
    }
  };
}
