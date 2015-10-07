// $(document).ready(function() {

// });

// alert("submitted form");
$(function() {
  var newContactForm = $('#add-contact');
  var editContactForm = $('#edit-contact');
  var contactsList = $('.contacts');

  editContactForm.on('reset', function() {
    editContactForm.remove();
  });

  contactsList.on('click', '.edit', function() {
    editContactForm.css('display', 'block');
    var contactEdit = $(this).closest('.contact');
    var editName = contactEdit.find('.contact-name').text();
    editContactForm.find('[name=name]').val(editName);
    var editEmail = contactEdit.find('.contact-email').text();
    editContactForm.find('[name=email]').val(editEmail);
    contactEdit.append(editContactForm);
  });

  newContactForm.on('submit', function() {

    $.ajax({

      // going to make a call to post to your create route
      // the create route is going to return pure json
      // look up serialize method
      // ajax is either success or failure; if success, it returns json
      // use that json to append to the html

      // action and method below refer to the html form stuff from index.erb:  <form id="add-contact" action="/" method="post">
      url: newContactForm.attr('action'),
      method: newContactForm.attr('method'),
      data: newContactForm.serialize(),
      dataType: 'json',
      success: function(contact) {
        // the below empties out the form inputs when the form is submitted
        newContact[0].reset();
        contactsList.append(getContactHTML(contact));
      }

    });

    // returning false keeps the page from reloading
    return false;

  });

    function getContactHTML(contact) {
      return '<div class="contact"><h4>' + contact.name + '</h4><h5>' + contact.email + '</h5></div><hr>';
    }

});

