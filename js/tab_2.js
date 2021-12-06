$(document).ready(function() {
    var $wrapper = $('.main_section_content'), 
        $allTabs = $wrapper.find('.sec_02_contents_desktop'),
        $tabMenu = $wrapper.find('.feature_01_btn');

    $allTabs.not(':first-of-type').hide(); 
    $tabMenu.each(function(i) {
$(this).attr('data-img-show', 'tab'+i);
    });

    $allTabs.each(function(i) {
$(this).attr('data-img-show', 'tab'+ i);
    });

    $tabMenu.on('click', function() {
        var tab = $(this).attr('data-img-show');
        $allTabs.attr('data-img-show', tab);

var dataTab = $(this).data('tab'),
$getWrapper = $(this).closest($wrapper); 

$getWrapper.find($tabMenu).removeClass('selected');
$(this).addClass('selected');
$getWrapper.find($allTabs).filter('[data-img'+dataTab+']').show();

    });

});