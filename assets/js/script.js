// $('#myModal').modal(options)
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })