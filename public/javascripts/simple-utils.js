
/**
** custom post method
**/
$.fn.simplePost = function(url,callback,overlayTarget){
    var base = this;
    var serializeStr = base.serialize();

    callback = callback || notifySuccess;

    $(overlayTarget).LoadingOverlay("show");
    $.post(url, serializeStr, callback).always(function() {
      $(overlayTarget).LoadingOverlay("hide",true);
    });

    return this;
};

/**
** initial post method
**/
$.fn.initPost = function(callback){
  var base = this;
  var submit = base.find('button :submit');



  base.submit(function(e){
    e.preventDefault();
    var url = $( this ).data('action');
    $( this ).simplePost(url,callback,base);
  });

};

/**
** A Generic function to prompt response from callback
**/
function notifySuccess(data){
  //console.log(data);
  var obj = data;
  if(obj.error){
    toastr.error(obj.error,"Error");
  }else if(obj.warn){
    toastr.warning(obj.warn,"Warning");
  }else if(obj.success){
    toastr.success(obj.success,'Success');
  }else{
    toastr.success('Update Completed.','Done!');
  }

}
