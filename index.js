$(document).ready(function (){
    $('#burger').click (function() {
        $('#header-main').css('display','flex');
    });
    $('#x').click (function() {
        $('#header-main').hide();
    });
});