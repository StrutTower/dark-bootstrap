$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
    });

    $('.toast').toast('show');


    $('#summernote-test').summernote();

    $('.select2-test').select2({
        width: '100%'
    });

    $('#daterangepicker-test-range').daterangepicker({
        timePicker: true,
        showDropdowns: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
            format: 'M/DD/YYYY hh:mm A'
        }
    });

    $('#daterangepicker-test-single').daterangepicker({
        timePicker: true,
        singleDatePicker: true,
        showDropdowns: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
            format: 'M/DD/YYYY hh:mm A'
        }
    });
});