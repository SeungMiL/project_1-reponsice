$(document).ready(function() {
    var $wrapper = $('.contents_2'), 
        $allTabs = $wrapper.find('.sec_01_tab_content '),
        $tabMenu = $wrapper.find('.sec_tab'); 

    $allTabs.not(':first-of-type').hide(); 
    $tabMenu.each(function(i) {
$(this).attr('data-tab', 'tab'+i);
    });

    $allTabs.each(function(i) {
$(this).attr('data-tab', 'tab'+i);
    });

    $tabMenu.on('click', function() {

var dataTab = $(this).data('tab'),
$getWrapper = $(this).closest($wrapper); 

$getWrapper.find($tabMenu).removeClass('selected');
$(this).addClass('selected');
$getWrapper.find($allTabs).hide();
$getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
    });

});