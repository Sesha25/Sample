// Isotope
var $container;
  var filters = {};
jQuery(function(){
  var $container = jQuery('#product-sort');
  var $filterDisplay = jQuery('#filter-display');
  var $filterLabelLink = jQuery('.filter-labels');
  var $filterList = jQuery('.filter-list');
  var $filterTrigger = jQuery('.filter-trigger');
  // initialize isotope
  jQuery(window).load(function(){
    // Add hidden class if item hidden
    var itemReveal = Isotope.Item.prototype.reveal;
    Isotope.Item.prototype.reveal = function() {
        itemReveal.apply( this, arguments );
        jQuery( this.element ).removeClass('isotope-hidden');
    };
    var itemHide = Isotope.Item.prototype.hide;
    Isotope.Item.prototype.hide = function() {
        itemHide.apply( this, arguments );
        jQuery( this.element ).addClass('isotope-hidden');
    };
    $container.isotope({
      animationEngine: 'best-available',
      itemSelector: '.item-sort',
      layoutMode: 'fitRows'
    });
    jQuery('.product-listing h4').matchHeight();
  });
  var comboFilter;
  // Filter section
  var $filterTargetLink = jQuery('.filter-category');
  // Set filter tab
  $filterTargetLink.on('click', function(){
    var $targetId = jQuery(this).data('tab');
    $filterTargetLink.removeClass('current');
    jQuery(this).addClass('current');
    jQuery('.filter-result').hide();
    $filterList.not('#'+$targetId).slideUp();
    jQuery('#'+$targetId).slideDown();
  });
  // Set selected and deselected option
  $filterLabelLink.on('click', function(){
    // exit directly if filter already disabled
    if (jQuery(this).hasClass('disabled') ){
        return false;
    }
    var $this = jQuery(this);
    var $optionSet = jQuery(this).parents('ul');
        group = $optionSet.attr('data-filter-group');
    // store filter value in object
    var filterGroup = filters[ group ];
    if ( !filterGroup ) {
      filterGroup = filters[ group ] = [];
    }
    var isAll = $this.hasClass('all');
    // reset filter group
    if ( isAll ) {
      Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
      };
      filters[ group ].remove(0,-1)
    }
    var index = jQuery.inArray($this.attr('data-filter'), filterGroup );
    if ( !isAll && index === -1 ) {
      // push filter to group
      filters[ group ].push($this.attr('data-filter'));
    } else if ( !isAll ) {
      // remove filter from group
      filters[ group ].splice( index, 1 );
    }
    // class toggling
    if ($this.hasClass('active') ) {
      $this.removeClass('active');
    }
    else {
      $this.addClass('active');
    }
    var $activeLength = jQuery('.filter-content .active').length;
    if($activeLength > 0) {
      $filterTrigger.show();
    } else {
      $filterTrigger.hide();
    }
    // let's do some filtering :>
    comboFilter = getComboFilter( filters ); 
    // gotta check and set those disabled filters:
    var $that = jQuery(this);
    // Size
    jQuery('li.size:not(.clone)').each(function() {
      var $this = jQuery(this);
      var getVal = $this.attr('data-filter');
      var numItems = jQuery('div'+getVal+':not(.isotope-hidden)').length;
      if(!jQuery(this).hasClass('active') && !$that.hasClass('size') ){
        if(numItems == 0){
          $this.addClass('disabled');
        }
        else {
          $this.removeClass('disabled');
        }
      }
      else if( $this.hasClass('active') && $this.hasClass('disabled') ){
        $this.removeClass('disabled');
      }
      else if(!jQuery(this).hasClass('active') ) {
        if(numItems > 0){
          $this.removeClass('disabled');
        }
      }
    });
    // Color
    jQuery('li.colour:not(.clone)').each(function() {
      var $this = jQuery(this);
      var getVal = $this.attr('data-filter');
      var numItems = jQuery('div'+getVal+':not(.isotope-hidden)').length;
      if(!jQuery(this).hasClass('active') && !$that.hasClass('colour') ){
        if(numItems == 0){
          $this.addClass('disabled');
        }
        else {
          $this.removeClass('disabled');
        }
      }
      else if( $this.hasClass('active') && $this.hasClass('disabled') ){
        $this.removeClass('disabled');
      }
      else if(!jQuery(this).hasClass('active') ) {
        if(numItems > 0){
          $this.removeClass('disabled');
        }
      }
    });
    // Price
    jQuery('li.price:not(.clone)').each(function() {
      var $this = jQuery(this);
      var getVal = $this.attr('data-filter');
      var numItems = jQuery('div'+getVal+':not(.isotope-hidden)').length;
      if(!jQuery(this).hasClass('active') && !$that.hasClass('price') ){
        if(numItems == 0){
          $this.addClass('disabled');
        }
        else {
          $this.removeClass('disabled');
        }
      }
      else if( $this.hasClass('active') && $this.hasClass('disabled') ){
        $this.removeClass('disabled');
      }
      else if(!jQuery(this).hasClass('active') ) {
        if(numItems > 0){
          $this.removeClass('disabled');
        }
      }
    });
    // Length
    jQuery('li.length:not(.clone)').each(function() {
      var $this = jQuery(this);
      var getVal = $this.attr('data-filter');
      var numItems = jQuery('div'+getVal+':not(.isotope-hidden)').length;
      if(!jQuery(this).hasClass('active') && !$that.hasClass('length') ){
        if(numItems == 0){
          $this.addClass('disabled');
        }
        else {
          $this.removeClass('disabled');
        }
      }
      else if( $this.hasClass('active') && $this.hasClass('disabled') ){
        $this.removeClass('disabled');
      }
      else if(!jQuery(this).hasClass('active') ) {
        if(numItems > 0){
          $this.removeClass('disabled');
        }
      }
    });
    // Fit
    jQuery('li.fit:not(.clone)').each(function() {
      var $this = jQuery(this);
      var getVal = $this.attr('data-filter');
      var numItems = jQuery('div'+getVal+':not(.isotope-hidden)').length;
      if(!jQuery(this).hasClass('active') && !$that.hasClass('fit') ){
        if(numItems == 0){
          $this.addClass('disabled');
        }
        else {
          $this.removeClass('disabled');
        }
      }
      else if( $this.hasClass('active') && $this.hasClass('disabled') ){
        $this.removeClass('disabled');
      }
      else if(!jQuery(this).hasClass('active') ) {
        if(numItems > 0){
          $this.removeClass('disabled');
        }
      }
    });
    // Set filter while clicking on filter button
    $filterTrigger.on('click', function(){
      $container.isotope({ filter: comboFilter });
      jQuery(this).hide();
      $filterList.hide();
      $filterTargetLink.removeClass('current');
      jQuery('.filter-result').show();
    });
    // update filter display
    var arrLbl = [];
    arrLbl = comboFilter.split('.');
    $filterDisplay.empty();
    // clone method for filter display
    var clone = 'clone';
    var cloneId = 0; // because cloning an id attr just wrong :>
    jQuery('li.active').each(function() {
      cloneId++;
      jQuery(this).clone().appendTo($filterDisplay).attr('id',clone+cloneId).addClass('clone');
    });
    jQuery('li.clone').on('click', function() {
      var that = jQuery(this);
      var parent = that.attr('data-filter');
      jQuery('.filter').find(parent).each(function() {
        jQuery(this).trigger('click');
      });
      $container.isotope({ filter: comboFilter });
      if($activeLength <= 1) {
        jQuery('.filter-clear').remove();
      }
      $filterTrigger.hide();
    });
    // resolves any outstanding issues with disableds
    // TODO: Find a way around using indexOf this way. Lots of unneccesary overhead.
    if ( comboFilter.indexOf('price') == -1 
      && comboFilter.indexOf('colour') == -1
      && comboFilter.indexOf('length') == -1 
      && comboFilter.indexOf('fit') == -1
      && comboFilter.indexOf('size') > 0 ){
          jQuery('a.size:not(.clone)').removeClass('disabled');
    }
    if ( comboFilter.indexOf('price') == -1 
      && comboFilter.indexOf('size') == -1
      && comboFilter.indexOf('length') == -1 
      && comboFilter.indexOf('fit') == -1
      && comboFilter.indexOf('colour') > 0 ){
          jQuery('a.colour:not(.clone)').removeClass('disabled');
    }
    if ( comboFilter.indexOf('size') == -1 
      && comboFilter.indexOf('colour') == -1
      && comboFilter.indexOf('length') == -1 
      && comboFilter.indexOf('fit') == -1
      && comboFilter.indexOf('price') > 0 ){
          jQuery('a.price:not(.clone)').removeClass('disabled');
    }
    if ( comboFilter.indexOf('size') == -1 
      && comboFilter.indexOf('colour') == -1
      && comboFilter.indexOf('price') == -1 
      && comboFilter.indexOf('fit') == -1
      && comboFilter.indexOf('length') > 0 ){
          jQuery('a.length:not(.clone)').removeClass('disabled');
    }
    if ( comboFilter.indexOf('size') == -1 
      && comboFilter.indexOf('colour') == -1
      && comboFilter.indexOf('length') == -1 
      && comboFilter.indexOf('price') == -1
      && comboFilter.indexOf('fit') > 0 ){
          jQuery('a.fit:not(.clone)').removeClass('disabled');
    }
    // filter display count
    var numItemsHidden = jQuery('.item-sort.isotope-hidden').length;
    var numItemsDisp = jQuery('.item-sort:not(.isotope-hidden)').length;
    var numItemsVisible = jQuery('.item-sort:not(.isotope-hidden)').length;
    var activeCheck = jQuery('li.active').size();
    if(numItemsHidden != 0 && numItemsDisp != 1) {
      // clear filter
      $filterDisplay.append( '<div onclick="clearAll();" class="filter-clear fil-trigger"><i class="fa fa-check-circle" aria-hidden="true"></i> Clear</div>' );
    }
    else if (numItemsHidden != 0 && numItemsDisp === 1) {
      $filterDisplay.append( '<div onclick="clearAll();" class="filter-clear fil-trigger"><i class="fa fa-check-circle" aria-hidden="true"></i> Clear</div>' );
    }
    else if (numItemsHidden === 0 && activeCheck > 0) {
      $filterDisplay.append( '<div onclick="clearAll();" class="filter-clear fil-trigger"><i class="fa fa-check-circle" aria-hidden="true"></i> Clear</div>' );
    }
    else{ // strictly fall-back - this should never get triggered 
      $filterDisplay.append( '<div onclick="clearAll();" class="filter-clear fil-trigger"><i class="fa fa-check-circle" aria-hidden="true"></i> Clear</div>' );
    }
  });
});
function getComboFilter( filters ) {
  var i = 0;
  var comboFilters = [];
  var message = [];
  for ( var prop in filters ) {
    message.push( filters[ prop ].join(' ') );
      var filterGroup = filters[ prop ];
      // skip to next filter group if it doesn't have any values
      if ( !filterGroup.length ) {
          continue;
      }
      if ( i === 0 ) {
        // copy to new array
          comboFilters = filterGroup.slice(0);
      } 
      else {
      var filterSelectors = [];
          // copy to fresh array
      var groupCombo = comboFilters.slice(0); // [ A, B ]
      // merge filter Groups
      for (var k=0, len3 = filterGroup.length; k < len3; k++) {
        for (var j=0, len2 = groupCombo.length; j < len2; j++) {
          filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
        }
      }
      // apply filter selectors to combo filters for next group
      comboFilters = filterSelectors;
      }
    i++;
  }
  comboFilters.sort();
    var comboFilter = comboFilters.join(', ');
  return comboFilter;
}
function clearAll(){
  jQuery('li.active').trigger('click');
  jQuery('#filter-display').empty();
  jQuery('.filter-list').hide();
  jQuery('.filter-clear').hide();
  jQuery('.filter-category').removeClass('current');
  jQuery('#product-sort').isotope({ filter: "*" }); 
}