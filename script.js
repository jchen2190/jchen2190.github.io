// send mail from contact form
document.querySelector('#form-button').addEventListener('click', function() {
    let subject = encodeURIComponent('Message from Bootstrap Button');
    let body = encodeURIComponent('This is a message sent from a Bootstrap button.');
    let email = 'jchen2190@gmail.com';
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  });