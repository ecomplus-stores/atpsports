import '#template/js/'
import './custom-js/pages'

storefront.on('widget:@ecomplus/widget-tag-manager', function () {
    setTimeout(function () {
      $('#modal-size-guide').modal('show')
    }, 800);
});
