var myApi={
    tpl:function(template,obj){
            var tpl= template.replace(/\{#(\w+)#\}/g,function(match,key,index,source){
                return obj[key]
            })
        return tpl;
    },
    callbackKeysrt: function (key, desc) {
        return function (a, b) {
            return desc ? b[key]-a[key]   : a[key] - b[key];
        }
    }
}
